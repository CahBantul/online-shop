<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is ebook store built with laravel 10. We use Midtrans for payment gateway and pusher for realtime event action.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This networking build with :

-   [Laravel 10](https://laravel.com/docs/10.x)
-   [PHP 8](https://www.php.net/downloads.php)
-   [composer](https://getcomposer.org/download/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an instructions on setting up project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

List things you need to use the software and how to install them.

-   check php version
    ```sh
    php -v
    ```
-   cek composer
    ```sh
    composer -V
    ```

### Installation

1. Clone the repo and enter the directory
    ```sh
    git clone https://github.com/CahBantul/online-shop.git && cd online-shop
    ```
2. Install packages
    ```sh
    composer install
    ```
3. Install packages
    ```sh
    npm install
    ```
4. rename file `.env.example` become `.env`.

    ```sh
    cp .env.example .env
    ```

5. migrating database and seeding dummy data

    ```sh
    php artisan migrate --seed
    ```

6. run the app
    ```sh
    php artisan serve
    ```
    the app running on [http://localhost:8000/](http://localhost:8000/)

7. start vite development
    ```sh
    npm run dev
    ```
    <p align="right">(<a href="#top" >back to top</a>)</p>
### Installation with Docker

1. Clone the repo and enter the directory
    ```sh
    git clone https://github.com/CahBantul/online-shop.git && cd online-shop
    ```
2. Install packages
    ```sh
    docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
    ```

3. rename file `.env.example` become `.env`.

    ```sh
    cp .env.example .env
    ```

4. Running app.

    ```sh
    ./vendor/bin/sail up -d
    ```

5. migrating database and seeding dummy data

    ```sh
    ./vendor/bin/sail php artisan migrate --seed
    ```

6. start vite development
    ```sh
    ./vendor/bin/sail npm run dev
    ```
    the app running on [http://localhost](http://localhost)
    <p align="right">(<a href="#top" >back to top</a>)</p>


<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@fardannozami](https://twitter.com/fardannozami)

Project Link: [https://github.com/CahBantul/online-shop.git](https://github.com/CahBantul/online-shop.git)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

List resources helpful and I would like to give credit to.

-   [Parsinta Youtube Channel](https://www.youtube.com/playlist?list=PLRKMmwY3-5MwADhthqRaewl-7e7AhjpP8)

<p align="right">(<a href="#top">back to top</a>)</p>
````
