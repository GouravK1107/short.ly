# 🔗 Short.ly — Modern URL Shortener

A modern, fast, and minimal URL Shortener built with **Django**. Convert long URLs into short, shareable links with a clean, responsive interface and instant redirection.

![Python](https://img.shields.io/badge/Python-3.12-blue?style=for-the-badge&logo=python)
![Django](https://img.shields.io/badge/Django-5.2-darkgreen?style=for-the-badge&logo=django)
![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)

---

## 🌐 Live Demo

🔗 **Live Website:** https://short-ly-0auu.onrender.com

---

> 🌍 **Project Type: Portfolio & Open for Everyone**
>
> This project started as a part of my portfolio, but it's built to be useful for everyone. Feel free to use it, fork it, and adapt it for your own needs. Contributions, issues, and suggestions are always welcome. If you find it helpful, consider giving it a ⭐!

## ✨ Features

- 🔗 Convert long URLs into short, shareable links
- ⚡ Instant redirection
- 🎨 Modern responsive UI
- 🌙 Dark / Light theme toggle
- 📋 One-click copy to clipboard
- 💾 Database-backed URL storage
- 🔄 Duplicate URL detection
- 📱 Mobile-friendly design
- 🚀 Production deployment on Render

---

## 📸 Preview

| Home Page | Generated Link |
| :--------: | :------------: |
| <img src="https://github.com/user-attachments/assets/6b0a9c24-d037-4385-a16d-bf972ddbed61" alt="Home Page" width="500"/> | <img src="https://github.com/user-attachments/assets/a861ba29-270e-4f2d-b3f4-c30917347ddf" alt="Generated Link" width="500"/> |

---

## 🛠️ Tech Stack

### Backend
- Python
- Django
- SQLite (Development)
- PostgreSQL Ready
- Gunicorn
- WhiteNoise

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Deployment
- Render

---

## 📂 Project Structure

```text
url_shortener/
│
├── shortner/
│   ├── migrations/
│   ├── templates/
│   ├── static/
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── utils.py
│
├── url_shortener/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── static/
├── staticfiles/
├── manage.py
├── requirements.txt
├── Procfile
├── build.sh
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/url-shortener.git
```

Move into the project directory

```bash
cd url-shortener
```

Create a virtual environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Apply migrations

```bash
python manage.py migrate
```

Run the development server

```bash
python manage.py runserver
```

Open

```
http://127.0.0.1:8000/
```

---

## 🚀 Deployment

This project is production-ready and deployed on **Render**.

Production configuration includes:

- Gunicorn
- WhiteNoise
- Environment Variables
- Static File Collection
- Database Configuration using `dj-database-url`

---

## 🔐 Environment Variables

Create a `.env` file for local development.

```env
SECRET_KEY=your_secret_key
DEBUG=True
```

For production (Render):

```env
SECRET_KEY=your_secret_key
DEBUG=False
DATABASE_URL=your_database_url
```

---

## 📦 Requirements

```
Django
Gunicorn
WhiteNoise
dj-database-url
psycopg2-binary
python-dotenv
```

---

## 💡 Future Improvements

- User authentication
- Custom aliases
- QR Code generation
- Analytics dashboard
- Click tracking
- URL expiration
- REST API
- Docker support
- Redis caching
- Admin dashboard enhancements

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the project and submit a pull request.

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**

GitHub: https://github.com/GouravK1107 <br>
Portfo: https://gouravk1107.github.io/my-portfolio/

---

Made with ❤️ using Django
