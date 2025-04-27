import React from 'react'

const Footer = () => {
    return (
        <footer class="footer">
            <section class="social-media">
                <div class="social-left">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-google"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                </div>
            </section>

            <section class="footer-links">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h6><i class="fas fa-gem"></i> Company name</h6>
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>

                        <div class="footer-col">
                            <h6>Products</h6>
                            <p><a href="#">Angular</a></p>
                            <p><a href="#">React</a></p>
                            <p><a href="#">Vue</a></p>
                            <p><a href="#">Laravel</a></p>
                        </div>

                        <div class="footer-col">
                            <h6>Useful links</h6>
                            <p><a href="#">Pricing</a></p>
                            <p><a href="#">Settings</a></p>
                            <p><a href="#">Orders</a></p>
                            <p><a href="#">Help</a></p>
                        </div>

                        <div class="footer-col">
                            <h6>Contact</h6>
                            <p><i class="fas fa-home"></i> New York, NY 10012, US</p>
                            <p><i class="fas fa-envelope"></i> info@example.com</p>
                            <p><i class="fas fa-phone"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="footer-bottom">
                © 2021 Copyright:
                <a href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>

    )
}

export default Footer