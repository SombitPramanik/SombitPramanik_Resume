# Sombit Pramanik — Portfolio

A responsive personal portfolio highlighting my software projects, published Android app, education, research, and technology interests. The site is built with semantic HTML, CSS, and vanilla JavaScript, with no framework or build step.

## About

I am an engineer by profession and a programmer by passion. I enjoy turning practical needs into software, from offline-first Android applications to machine-learning, web, and hardware projects.

My background includes Python and Flask, machine learning, embedded systems, and research in medical image analysis. I have worked with ESP32 and Raspberry Pi hardware, and I am currently developing a private Android application with Jetpack Compose.

## Featured work

### Sun Irradiance Meter

An Android app that estimates solar irradiance from a phone's light and motion sensors. It includes lux-to-W/m² conversion, tilt correction, smoothing, short-term prediction, manual calibration, and sensor diagnostics.

- [Get it on Google Play](https://play.google.com/store/apps/details?id=com.sombitpramanik.sunirreadencemeater)
- The app works offline and does not collect user-identifying data or use third-party tracking.
- Reported usage: 1.7K+ downloads and 360+ monthly active users.

### Selected GitHub projects

- [Download YouTube Video in Terminal](https://github.com/SombitPramanik/Download_YouTube_Video_in_Terminal) — Interactive terminal downloader built with Textual and PyTubeFix, with stream selection and live progress.
- [HC-SR04 MicroPython driver](https://github.com/SombitPramanik/UL_Sensor_HC_SR04) — Lightweight ultrasonic distance sensor driver for MicroPython-compatible boards.
- [FaceRecognitionOnRPI](https://github.com/SombitPramanik/FaceRecognitionOnRPI) — Raspberry Pi face-recognition project exploring a k-nearest neighbors approach.
- [Market-Analyzer](https://github.com/SombitPramanik/Market-Analyzer) — Stock analysis project exploring historical data and indicator-based rules.
- [QRCODE](https://github.com/SombitPramanik/QRCODE) — PHP-backed QR code generation website designed for straightforward deployment.

## Research

- Published research on colorectal cancer detection using convolutional neural networks.
- Ongoing work exploring deep steganographic encoding with a U-Net+ architecture.

## Technology interests

The portfolio highlights technologies I use or explore across several areas:

- **Languages:** Python, Java, JavaScript, C, C++, PHP, HTML, CSS
- **Android and web:** Jetpack Compose, Flask, FastAPI, React, Node.js, Textual
- **Machine learning and data:** scikit-learn, TensorFlow, PyTorch, OpenCV, NumPy, Pandas
- **Hardware and tools:** Raspberry Pi, ESP32, Arduino, MicroPython, Git, GitHub, Docker

## Run locally

The site is static and has no package installation or build step. You can open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Project structure

```text
.
├── assets/       # Profile images and research paper
├── css/          # Stylesheets, grouped by page section
├── js/           # Scroll reveal, typing, ambient background, and footer scripts
└── index.html    # Portfolio page
```

## Site details

- Responsive navigation and layouts for desktop and mobile.
- Repeating scroll-reveal effects and an animated About headline.
- Ambient background orbs, with cursor-following glow on larger pointer-enabled screens.
- Motion effects respect the user's reduced-motion preference.
- Technology badges are served by [Shields.io](https://shields.io/).

## Connect

- [GitHub](https://github.com/SombitPramanik)
- [LinkedIn](https://linkedin.com/in/sombit-pramanik)
