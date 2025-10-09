<p align="left">

# 🧑‍💼 Oluwayemisi Olabanji Okunrounmu — 🌐 My Portfolio CV Website

Welcome to my personal portfolio! 

🚀 **Deployed automatically via GitHub Actions to Azure Static Web Apps**

TThis project showcases my personal portfolio — a simple and responsive website hosted on **Azure Static Web Apps** with continuous deployment (CI/CD) directly from GitHub.  
Every time a change is pushed to the `main` branch, the site is automatically rebuilt and redeployed to Azure.

[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Yemmmyc)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/oluwayemisi-okunrounmu-13936a18)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF4088?style=for-the-badge&logo=vercel&logoColor=white)](https://ashy-cliff-0b25d7a10.2.azurestaticapps.net/)

---

## 🧭 About

This is a personal portfolio website created to highlight my journey as an IT professional.  
I am an **IT Technical Support specialist** with a proven ability to align technology with business strategy and deliver scalable, secure solutions.

The portfolio serves as a central hub where visitors can:
- Learn more about me  
- View my technical skills  
- Explore my featured projects  
- Connect with me directly  

---

## ✨ Features

✅ **Fully Responsive Design** – Works seamlessly across devices  
🎨 **Modern Oxblood Theme** – Professional look with consistent styling  
🧱 **Card-Based Layout** – Clean presentation of projects and sections  
🧭 **Smooth Navigation** – Quick access to all sections of the site  
🌐 **Deployed on Azure Static Web Apps and GitHub Pages**

---

## 🛠️ Technologies Used

- **HTML5** – Structure and content  
- **CSS3** – Styling and layout  
- **JavaScript** – Interactivity and smooth scrolling  
- **GitHub & Azure** – Hosting and CI/CD deployment  

## 🧩 Tools Used

- **Visual Studio Code** — Primary editor used for development and deployment.
- **Azure Static Web Apps (VS Code extension)** — Deploy directly from VS Code.
- **Azure Portal** — Manage the Static Web App and view deployment history.
- **Git** — Local version control.
- **GitHub** — Remote repository hosting.
- **GitHub Actions** — CI/CD workflow that automatically deploys on push.
- **PowerShell / Terminal** — Run local git commands on Windows.
- **Chrome / Edge / Firefox** — Browser testing and inspection (DevTools).
- **(Optional) Azure CLI** — For manual Azure operations if needed.

---

## 🗂 Project Structure

```bash
my-portfolio/
├── index.html        # Main HTML file
├── styles.css        # Custom CSS for styling
├── assets/           # (Optional) images, icons, media
├── .github/
│   └── workflows/    # GitHub Actions for Azure
└── README.md         # Documentation

🚀 How to Run Locally

Follow these steps to view the project locally:

# Clone the repository
git clone https://github.com/Yemmmyc/my-portfolio.git

# Navigate into the folder
cd my-portfolio

# Open in your browser
start index.html     # Windows
open index.html      # macOS
xdg-open index.html  # Linux

☁️ Azure Static Web App Deployment (VS Code Method)

This section documents how the portfolio was deployed from VS Code to Azure Static Web Apps using GitHub Actions.

🪴 Step 1 — Setup

Open your project in VS Code

Install the Azure Static Web Apps extension

Sign in to your Azure account

Click the Azure icon → Static Web Apps → + Create Static Web App

⚙️ Step 2 — Configuration
Setting	Value
App Name	my-portfolio
Framework	Custom
App location	/
API location	(leave blank)
Output location	/

Azure will automatically create the GitHub Actions workflow:
.github/workflows/azure-static-web-apps.yml

🔁 Step 3 — Automatic CI/CD Deployment

Every time you push to the main branch, Azure automatically builds and redeploys your site.

Monitor deployment logs in:

GitHub → Actions tab

Azure Portal → Deployments

🎨 CSS Not Applying? (Fix Guide)

If your page loads but the styles don’t apply:

Check the file reference in your HTML:

<link rel="stylesheet" href="styles.css">


Ensure the file is actually named styles.css.

Then run:

git add .
git commit -m "Fix CSS path"
git push


Azure will automatically redeploy the updated version.

🌍 Live Deployment

✅ Azure URL:
https://ashy-cliff-0b25d7a10.2.azurestaticapps.net/

✅ GitHub Repository:
https://github.com/Yemmmyc/my-portfolio

👤 Author

Oluwayemisi Olabanji Okunrounmu
IT Technical Support | Cloud & DevOps Enthusiast

📧 yemmmyc@hotmail.com

📞 08034737155

📝 License

This project is open-source and available under the MIT License.

⭐️ If you like this project, don’t forget to star the repository!


---

✅ This version will render **exactly like a professional GitHub README**, with:
- Tree view showing properly  
- Code blocks highlighted  
- Tables and icons aligned  
- Section dividers neatly spaced  
</p>


