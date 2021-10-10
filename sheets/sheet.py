import gspread 
import json
import os.path
from oauth2client.service_account import ServiceAccountCredentials
from pprint import pprint

keyfile_dict = {
    "type": "service_account",
  "project_id": "hacktheheights6",
  "private_key_id": "d498a56146ee5d5959e1c0ed52d570f00929cf17",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDjA+PPw1TAc6uR\ngs88KfVLv6MSFSqPAotLMl4lNnuDB/92cqpLrDjpQ0FePC1ILtXzE3CiydgxwME2\nuEkrbhKs7PVq4JiKFKA8EgxypWSQtfgCHJnlpPPpHcGOcSGQwuO3QeA9yduZ9FBy\nT2zc2VILoORnyiZRVnyawBfliJAiJnC9+att7pw+iwDzkJGAJgH2kcyy7WQscX6w\nXMkcy0dMtN06hAAvqHommWf76jbIHm84YiU4d609pKZ4Of4fHcmAhokmqyRx8NdX\nGv1qbPlyYb6FqXzFBqsFruJ9viHBKgcMYFcDATzDfI5bbA6E721vTrMBG7Rjaso/\n7BDUtkjfAgMBAAECggEASH+KBeRSESH/lTlKuGKH8VhymghDbqd315xuv4CeQjLQ\nLUIiS4dlJ21wl0kthuNaNUYsjvhaAE2YBsMkrud4tFv6ZlbysAo1P+ndqtFSA/rx\nCK+coF+k+3oiwbw0ZXgv4+r4U5M++/QvqsndsMwAbTFFMDY5NXmi0oLtPsL1kMnO\n2tjR6KWHMVUQqUyHsRrYM3l1ZKqYlVG9HXkL4dI+oYmUTdVOOIdgXWN65wWK60lg\nRJ9SGaSGC3dZcWbL/o7CekKizpT2v/CfJD88EMO/Ekqg+V1GQs8kT7QBg3uMVr1S\ndUC/oOTor2O5Tc01Gyan7rGFm6+vaOl6Cni5oO6KbQKBgQD6P9KrNbIQrhr1OMtv\nsL4lxjb1UAUPELASe+6gHsHPCoZQf1PDyt4sVClwduBKC10iXpl9mrp6fwHqJnOL\nObVS1vduXquzZI4G1YgobvPZOJqrJT3yAgrk3aeyeeNRy0kTPHiqdZRwO7vixcJa\nQFr3F2UwJlWHzWtZbRul9fxbkwKBgQDoO2Jk4roBi5QfcT5x0KWSEvd0oizhjU8p\nnRypxIEgGKQVo9AHMERPDEzxxVWjglobr6IBqLpCpuOyzNu1YFaJq38OVs9ZaO88\n163SucFhLLlhFWzsNAQuh6zB0875ckJfyo6pE7I+FyG/5qEjGX9LaZyblx++mtfH\n0JjS6mrlBQKBgFGSymZa6396cXksGUyALYt8sF+IxQ1jIDH2ShPR0tVdlejZiIGT\nOJb0nEl3xqb8S1Cvy5LhBBZ4HjSochOZLR0iy6cjnw6sIYviwS6E9GIDjI9rZWTk\n+44dHtQT3WDFRj3KAX93MnrfTeCfHDp1LfHLo4VtiYXqFSsiYNfZdniXAoGAQiaI\nRIyAx2fm7X3od6sjPpTAgCyh9C24WvYx7/nVfjsGolNjMmkBTDMIx+WaG1VKLZC9\n6RMS22GGgqvv+Z5TiCudqYv4zFMjsoUNMnVPLEr9EzZzLGU0u7xR7XRUBKITXg3o\nzSibISydpHghdkoRBH406e0GUdjxli1JGutDP7ECgYBLVNLx6gcC8moIMwFRO8xd\nzHxQi66TFQj6qYQenaB9vEVRPIVtSGOlEewGZic7bFZ9N5Jnr9xwPmsbT10vUr4U\n0weTD7XThIVw1HgtLMKNJXz/ASt3UvyyWljMzN3aa20c0MNJAVQCj8ZKr39EfwAu\n1je/u48QvaiHxQqs/Zd5lQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "kenny-202@hacktheheights6.iam.gserviceaccount.com",
  "client_id": "106867364149184261473",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/kenny-202%40hacktheheights6.iam.gserviceaccount.com"
}

scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]

creds = ServiceAccountCredentials.from_json_keyfile_dict(keyfile_dict, scope)

client = gspread.authorize(creds)

accouncement_sheet = client.open("HTH6_Announcements").sheet1  # Open the spreadhseet
schedule_sheet = client.open("HTH6_Announcements").worksheet('sheet2')

announcement_data = accouncement_sheet.get_all_records()  # Get a list of all records
schedule_data = schedule_sheet.get_all_records()

with open(os.path.join("sheets/announcements.json"), 'w') as fout:
    json.dump(announcement_data, fout)

with open(os.path.join("sheets/schedule.json"), 'w') as fout:
    json.dump(schedule_data, fout)

#pprint(announcement_data)
#pprint(schedule_data)