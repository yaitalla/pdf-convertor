module.exports = ({ }) => {
    const today = new Date();

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Yassine Aitalla - Resume</title>
    
        <!-- Meta -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Responsive Resume Template">
        <link rel="shortcut icon" href="favicon.ico">
    
        <!-- Google Font -->
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
    
        <!-- FontAwesome JS-->
        <script defer src="https://use.fontawesome.com/releases/v5.1.1/js/all.js" integrity="sha384-BtvRZcyfv4r0x/phJt9Y9HhnN5ur1Z+kZbKVgzVBAlQZX4jvAuImlIz+bG7TS00a" crossorigin="anonymous"></script>
    
        <!-- Theme CSS -->
        <link id="theme-style" rel="stylesheet" href="css/pillar-5.css">
    
    
    </head>
    
    <body>
    
        <article class="resume-wrapper text-center position-relative">
            <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
                <header class="resume-header pt-4 pt-md-0">
                    <div class="media flex-column flex-md-row">
                        <img class="mr-3 img-fluid picture mx-auto" src="images/pic.jpg" height="800" alt="">
                        <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                            <div class="primary-info">
                                <h2 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">Yassine Aitalla</h2>
                                <div class="title mb-3">Full Stack Developer</div>
                                <ul class="list-unstyled">
                                    <li class="mb-2"><a href="#"><i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>yaitalla.dev@gmail.com</a></li>
                                    <li><a href="#"><i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>07 82 86 47 94</a></li>
                                </ul>
                            </div><!--//primary-info-->
                            <div class="secondary-info ml-md-auto mt-2">
                                <ul class="resume-social list-unstyled">
                                    <li class="mb-3"><a href="https://www.linkedin.com/in/yassine-aitalla-285177109/"><span class="fa-container text-center mr-2"><i class="fab fa-linkedin-in fa-fw"></i></span>Linkedin</a></li>
                                    <li class="mb-3"><a href="https://github.com/yaitalla"><span class="fa-container text-center mr-2"><i class="fab fa-github-alt fa-fw"></i></span>Github</a></li>
                                    <li class="mb-3"><a href="https://bitbucket.org/Bender_Rodriguez/"><span class="fa-container text-center mr-2"><i class="fab fa-bitbucket fa-fw"></i></span>Bitbucket</a></li>
                                    <li><a href="#"><span class="fa-container text-center mr-2"><i class="fas fa-globe"></i></span>yourwebsite.com</a></li>
                                </ul>
                            </div><!--//secondary-info-->
    
                        </div><!--//media-body-->
                    </div><!--//media-->
                </header>
                <div class="resume-body p-5">
                    <section class="resume-section summary-section mb-5">
                        <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
                        <div class="resume-section-content">
                            <p class="mb-0">currently Fullstack JS developper at Whis Digital Consulting</p>
                        </div>
                    </section><!--//summary-section-->
                    <div class="row">
                        <div class="col-lg-9">
                            <section class="resume-section experience-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Programming Experience</h2>
                                <div class="resume-section-content">
                                    <div class="resume-timeline position-relative">
    
                                            <article class="resume-timeline-item position-relative pb-5">
                                                    <div class="resume-timeline-item-header mb-2">
                                                        <div class="d-flex flex-column flex-md-row">
                                                            <h3 class="resume-position-title font-weight-bold mb-1">React Redux Tetris</h3>
                                                            <div class="resume-company-name ml-auto">école 42</div>
                                                        </div><!--//row-->
                                                        <div class="resume-position-time">Multiplayer Tetris Game - <small class="copyright">  <a href="https://cdn.intra.42.fr/pdf/pdf/951/red_tetris.fr.pdf"  target="_blank">sujet</a></small> - <small class="copyright"><a href="https://github.com/yaitalla/new-tetris" target="_blank">code</a></small> </div>
                                                    </div><!--//resume-timeline-item-header-->
                                                    <div class="resume-timeline-item-desc">
                                                        <p>This project consists of o develop a networked multiplayer tetris game from a stack of software exclusively Full Stack Javascript</p>
                                                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                                                        <p>Here are the main features</p>
                                                        <ul>
                                                                <li>Web integration</li>
                                                                <li>real-time communication (bidirectional client/server)</li>
                                                                <li>secured authentication / access-based navigation</li>
                                                                <li>Unit tests</li>
                                                              <li>functional Programming</li>
                                                        </ul>
                                                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">Javascript</span></li>
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">React16.8 (Hooks, async)</span></li>
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">Redux</span></li>
                                      <li class="list-inline-item"><span class="badge badge-primary badge-pill">HTML/CSS</span></li>
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">NodeJS</span></li>
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">npm/webpack/babel</span></li>
                                                        </ul>
                                                    </div><!--//resume-timeline-item-desc-->
            
                                                </article><!--//resume-timeline-item-->
    
                                            <article class="resume-timeline-item position-relative pb-5">
                                                    <div class="resume-timeline-item-header mb-2">
                                                        <div class="d-flex flex-column flex-md-row">
                                                            <h3 class="resume-position-title font-weight-bold mb-1">Backend / Frontend</h3>
                                                            <div class="resume-company-name ml-auto">Paris</div>
                                                        </div><!--//row-->
                                                        <div class="resume-position-time"> - <small class="copyright">  fullstack developer Internship - at <a href="https://www.linkedin.com/company/whis-digital-consulting/"  target="_blank">Whis-Digital-consulting</a></small> - <small class="copyright"><a href="https://github.com/yaitalla" target="_blank">code</a></small> </div>
                                                    </div><!--//resume-timeline-item-header-->
                                                    <div class="resume-timeline-item-desc">
                                                        <p>I've created a set of features and tools, from which we have built our own successful apps - most mainly Javascript. </p>
                                                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                                                        <p>field of activity / features</p>
                                                        <ul>
                                                            <li>Web integration</li>
                                                            <li>secured file transfert protocol</li>
                                                            <li>real-time communication (bidirectional client/server)</li>
                                                            <li>secured authentication / access-based navigation</li>
                                                              <li>Unit tests</li>
                                                            <li>functional Programming</li>
                                                        </ul>
                                                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">Javascript</span></li>
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">Redux</span></li>
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">NodeJS</span></li>
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">ReactJS</span></li>
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">MongoDB</span></li>
                                                            <li class="list-inline-item"><span class="badge badge-primary badge-pill">HTML5/CSS</span></li>
                                                        </ul>
                                                    </div><!--//resume-timeline-item-desc-->
                                                </article><!--//resume-timeline-item-->
    
    
                                        <article class="resume-timeline-item position-relative pb-5">
                                            <div class="resume-timeline-item-header mb-2">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Minishell - 21sh - 42sh</h3>
                                                    <div class="resume-company-name ml-auto">école 42</div>
                                                </div><!--//row-->
                                                <div class="resume-position-time">Shell command prompt - <small class="copyright">  <a href="https://cdn.intra.42.fr/pdf/pdf/183/42sh.fr.pdf"  target="_blank">sujet</a></small> - <small class="copyright"><a href="https://github.com/Yassine-Ait-Alla/42sh" target="_blank">code</a></small> </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>This project consists of creating a complete shell from scratch. A minimum set of features is required, from which we have built our own successful shell - going to the job control and the shell script. This project allowed me to see or review a very wide range of standard UNIX (and POSIX) features.</p>
                                                <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                                                <p>Here are the main features</p>
                                                <ul>
                                                    <li>Line acquisition: prompt, read command lines, edit line..</li>
                                                    <li>The following builtins with all their options(POSIX standart): "cd", "echo", "exit", "env", "setenv", "unsetenv", "read"</li>
                                                    <li>Execution of commands with their parameters and PATH management.</li>
                              <li>Error handling and value of return</li>
                                                    <li>Logical and redirection operators:  ">", ">>", "<", "|" and "&&" "||"</li>
                                                </ul>
                                                <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">C</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Vim</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Unix</span></li>
                              <li class="list-inline-item"><span class="badge badge-primary badge-pill">Posix</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Gcc</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">zsh/bash/sh</span></li>
                                                </ul>
                                            </div><!--//resume-timeline-item-desc-->
    
                                        </article><!--//resume-timeline-item-->
    
                                        <article class="resume-timeline-item position-relative pb-5">
    
                                            <div class="resume-timeline-item-header mb-2">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Camagru</h3>
                                                    <div class="resume-company-name ml-auto">école 42</div>
                                                </div><!--//row-->
                                                <div class="resume-position-time">Basic instagram clone - Web app - <small class="copyright"><a href="https://cdn.intra.42.fr/pdf/pdf/595/camagru.fr.pdf" target="_blank">sujet</a></small> - <small class="copyright">  <a href="https://bitbucket.org/Bender_Rodriguez/camagru" target="_blank">code</a></small></div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>Create, in PHP, a small Instagram-like site allowing users to create and share photo-montages. You will thus implement, with bare hands (the frameworks are prohibited), the basic functionalities encountered on the majority of the sites having a base user.</p>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">Features:</h4>
                                                <ul>
                                                    <li>User Part: Login/Register secured</li>
                                                    <li>Take pictures with webcam / Upload pictures</li>
                                                    <li>Likes and comment user's pictures</li>
                              <li>Delete your own pics and comments</li>
                              <li>Pictures merge / filters</li>
                                                    <li>Secure database queries</li>
    
                                                </ul>
                                                <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">PHP</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Javascript</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">MySQL</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">HTML/css</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Apache</span></li>
                              <li class="list-inline-item"><span class="badge badge-primary badge-pill">Atom</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Lamp</span></li>
                                                </ul>
                                            </div><!--//resume-timeline-item-desc-->
    
                                        </article><!--//resume-timeline-item-->
    
                                        <article class="resume-timeline-item position-relative pb-5">
    
                                            <div class="resume-timeline-item-header mb-2">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Libft ASM</h3>
                                                    <div class="resume-company-name ml-auto">école 42</div>
                                                </div><!--//row-->
                                                <div class="resume-position-time">ASM64 function library (Assembler) - <small class="copyright"><a href="https://cdn.intra.42.fr/pdf/pdf/1096/libft-asm.fr.pdf" target="_blank">sujet</a></small> - <small class="copyright">  <a href="https://github.com/Yassine-Ait-Alla/Libft_ASM" target="_blank">code</a></small></div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                            <p>Become familiar with the syntax of the language, working concept of stack, but also the behavior of the compiler.</p>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">Fonctions</h4>
                                                <ul>
                                                    <li>String functions: strcat, strdup, strcpy, strchr...</li>
                                                    <li>Display functions: cat, strput...</li>
                                                    <li>Memory functions: bzero, memset, memcpy...</li>
                              <li>Other usefull functions...</li>
    
                                                </ul>
                                                <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">ASM</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Gcc/Clang</span></li>
                                                    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Shell</span></li>
                              <li class="list-inline-item"><span class="badge badge-primary badge-pill">Vim</span></li>
    
                                                </ul>
                                            </div><!--//resume-timeline-item-desc-->
    
                                        </article><!--//resume-timeline-item-->
    
    
    
                                    </div><!--//resume-timeline-->
    
    
    
    
    
    
                                </div>
                            </section><!--//experience-section-->
                        </div>
                        <div class="col-lg-3">
                            <section class="resume-section skills-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                                <div class="resume-section-content">
                                    <div class="resume-skill-item">
                                        <h4 class="resume-skills-cat font-weight-bold">Frontend</h4>
                                        <ul class="list-unstyled mb-4">
    
                                            <li class="mb-2">
                                                <div class="resume-skill-name">React</div>
                                                <div class="progress resume-progress">
                                                    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 94%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mb-2">
                                                <div class="resume-skill-name">JavaScript</div>
                                                <div class="progress resume-progress">
                                                    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 96%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </li>
                            <li class="mb-2">
                                <div class="resume-skill-name">Bootsrap</div>
                              <div class="progress resume-progress">
                              <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 96%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </li>
                                            <li class="mb-2">
                                                <div class="resume-skill-name">HTML/CSS</div>
                                                <div class="progress resume-progress">
                                                    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 96%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div><!--//resume-skill-item-->
    
                                    <div class="resume-skill-item">
                                        <h4 class="resume-skills-cat font-weight-bold">Backend</h4>
                                        <ul class="list-unstyled">
                                            <li class="mb-2">
                                                <div class="resume-skill-name">Nodejs</div>
                                                <div class="progress resume-progress">
                                                    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 95%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </li>
                            <li class="mb-2">
                                                <div class="resume-skill-name">Expressjs</div>
                                                <div class="progress resume-progress">
                                                    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 95%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </li>
                            <li class="mb-2">
                                                <div class="resume-skill-name">MongoDB</div>
                                                <div class="progress resume-progress">
                                                    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 95%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mb-2">
                                                <div class="resume-skill-name">Firebase</div>
                                                <div class="progress resume-progress">
                                                    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 92%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mb-2">
                                                <div class="resume-skill-name">Javascript</div>
                                                <div class="progress resume-progress">
                                                    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 86%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </li>
    
                                        </ul>
                                    </div><!--//resume-skill-item-->
    
                                    <div class="resume-skill-item">
                                        <h4 class="resume-skills-cat font-weight-bold">Others</h4>
                                        <ul class="list-inline">
                              <li class="list-inline-item"><span class="badge badge-light">ASM</span></li>
                              <li class="list-inline-item"><span class="badge badge-light">C</span></li>
                                            <li class="list-inline-item"><span class="badge badge-light">Unix</span></li>
                                            <li class="list-inline-item"><span class="badge badge-light">Code Review</span></li>
                                            <li class="list-inline-item"><span class="badge badge-light">Git</span></li>
                                            <li class="list-inline-item"><span class="badge badge-light">Unit Testing</span></li>
                                            <li class="list-inline-item"><span class="badge badge-light">Shell</span></li>
                                            <li class="list-inline-item"><span class="badge badge-light">C#</span></li>
                                            <li class="list-inline-item"><span class="badge badge-light">C++</span></li>
                                            <li class="list-inline-item"><span class="badge badge-light">WordPress</span></li>
                                            <li class="list-inline-item"><span class="badge badge-light">R</span></li>
                                        </ul>
                                    </div><!--//resume-skill-item-->
                                </div><!--resume-section-content-->
                            </section><!--//skills-section-->
                            <section class="resume-section education-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                                <div class="resume-section-content">
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            <div class="resume-degree font-weight-bold">Architecte du numérique</div>
                                            <div class="resume-degree-org">École 42 (Paris)</div>
                                            <div class="resume-degree-time">2016 - now</div>
                                        </li>
                                        <li>
                                            <div class="resume-degree font-weight-bold">BAC es</div>
                                            <div class="resume-degree-org">Lycée Toulouse Lautrec - Toulouse</div>
                                            <div class="resume-degree-time">2009</div>
                                        </li>
                                    </ul>
                                </div>
                            </section><!--//education-section-->
                            <section class="resume-section reference-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards</h2>
                                <div class="resume-section-content">
                                    <ul class="list-unstyled resume-awards-list">
                                        <li class="mb-2 pl-4 position-relative">
                                            <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                            <div class="resume-award-name">Award Hackaton Consultin'France</div>
                                            <div class="resume-award-desc">Subject: Employability & Competitiveness: how does a company AND an employee create the conditions of employability in a changing world?</div>
                                        </li>
                                        <li class="mb-0 pl-4 position-relative">
                                            <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                            <div class="resume-award-name">Award Hackaton Sup de Pub</div>
                                            <div class="resume-award-desc">Consulting for <a href="http://unefourmiiverte.com/">fourmi verte</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </section><!--//interests-section-->
                            <section class="resume-section language-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                                <div class="resume-section-content">
                                    <ul class="list-unstyled resume-lang-list">
                                        <li class="mb-2"><span class="resume-lang-name font-weight-bold">French</span> <small class="text-muted font-weight-normal">(Native)</small></li>
                                        <li class="mb-2 align-middle"><span class="resume-lang-name font-weight-bold">English</span> <small class="text-muted font-weight-normal">(Professional)</small></li>
                                        <li><span class="resume-lang-name font-weight-bold">Spanish</span> <small class="text-muted font-weight-normal">(Notions)</small></li>
                                    </ul>
                                </div>
                            </section><!--//language-section-->
                            <section class="resume-section interests-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                                <div class="resume-section-content">
                                    <ul class="list-unstyled">
                                        <li class="mb-1">Gardening</li>
                                        <li class="mb-1">Video games</li>
                                        <li class="mb-1">Cooking</li>
                                    </ul>
                                </div>
                            </section><!--//interests-section-->
    
                        </div>
                    </div><!--//row-->
                </div><!--//resume-body-->
    
    
            </div>
        </article>
    
    
        <footer class="footer text-center pt-2 pb-5">
             <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
    
        </footer>
    
    
    
    </body>
    </html>
    `;


};