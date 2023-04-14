---

date: {{ .Date }}
draft: true
title: "{{ replace .Name "-" " " | title }}"
company:
location:
from: {{ .Date.Format "January 2006" }}
to: {{ .Date.Format "January 2006" }}

---
