<div align="center">

# Somprasong Wasuwid · Software Portfolio

**Full-stack web development, Android, and service robotics**

[Live portfolio](https://somprasong-wasuwid.netlify.app/) · [LinkedIn](https://www.linkedin.com/in/somprasong-wasuwid-271b64350/) · [Email](mailto:somprasongwasuwid@gmail.com)

</div>

I’m a fourth-year Computer Engineering student at Rajamangala University of Technology Phra Nakhon. This portfolio brings together my web projects, mobile design work, and internship at Inspire IVF, where I built Android controls for the LUNA service robot.

## Project timeline

| When | Project | What to explore |
| --- | --- | --- |
| 4 Aug 2024 | [Factory production system analysis](factory-production.html) | Four diagrams covering department responsibilities, system boundaries, data flow, and entity relationships. |
| Oct–Nov 2024 | Headphone showcase | An animated product page for AirPods Max. |
| Nov–Dec 2024 | Animated login and registration | A single-page interface that switches between account creation and sign-in. |
| Feb–May 2025 | Car showroom management | A full-stack application for vehicle inventory and customer records. |
| Latest project | BaanChang (บ้านช่าง) | A Figma mobile prototype for finding local tradespeople by trade or province. |

The [interactive timeline](https://somprasong-wasuwid.netlify.app/#portfolio) includes project links, horizontal scrolling, and a shortcut to the latest project.

## Internship and credentials

The experience gallery follows LUNA from development and testing at Inspire IVF through MAI Forum, Opportunity Day, and my university co-op presentation. The Opportunity Day entry links to the investor webcast. The certificates section includes ten credentials with links to the original images or PDFs.

| Application documents | English | ไทย |
| --- | --- | --- |
| Resume | [Download PDF](documents/Somprasong-Resume.pdf) | [ดาวน์โหลด PDF](documents/Somprasong-Resume-Thai.pdf) |
| CV | [Download PDF](documents/Somprasong-CV.pdf) | [ดาวน์โหลด PDF](documents/Somprasong-CV-Thai.pdf) |

## Run locally

From the repository root, start a static server and open [the local portfolio](http://localhost:8000/).

```sh
python -m http.server 8000
```

## Source and deployment

- `index.html` contains the profile, timeline, experience gallery, certificates section, and FormSubmit contact form.
- `factory-production.html` presents the four factory diagrams at full resolution.
- `style.css` and `script.js` control the responsive layout, timeline navigation, gallery filters, and certificate carousel.
- `img/` holds project previews, event photos, and certificate assets. `documents/` holds the application PDFs and additional certificate PDFs.

The website uses plain HTML, CSS, and JavaScript. To publish a manual Netlify update, upload the folder containing the two HTML pages, stylesheet, script, and asset directories to the existing project’s Deploys page.
