angular.module('atento', ['ngAnimate', 'ngTouch'])
        .directive('sbLoad', ['$parse', function($parse) {
                return {
                    restrict: 'A',
                    link: function(scope, elem, attrs) {
                        scope.$parent.$parent.imagen_size(elem);
                        var fn = $parse(attrs.sbLoad);
                        elem.on('load', function(event) {
                            scope.$apply(function() {
                                fn(scope, {$event: event});
                            });
                        });
                    }
                };
            }]).directive('orientable', function() {
    return {
        link: function(scope, element, attrs) {

            element.bind("load", function(e) {

                // success, "onload" catched
                // now we can do specific stuff:

                if (this.naturalHeight > this.naturalWidth) {
                    this.className = "vertical";
                }
            });
        }
    }
})
        .controller('appMain', function($scope) {
            $scope.atento = {
                telefono: "(01) 3116400"
            };
            $scope.isSubmenu = function(submenu) {
                var a = false;
                if (submenu == null)
                    a = false;
                if (submenu.length == null)
                    a = false;
                if (submenu.length <= 0)
                    a = false;
                if (submenu.length > 0)
                    a = true;
                return a;
            };
            $scope.imageSize = {"all": "1200x800", "w": "1200", "h": "800"};
            $scope.imagen_size = function(img) {

                var a = img[0].width;
                var b = $(img)[0].height;
                $scope.imageSize = {
                    "all": a + "x" + b,
                    "w": a,
                    "h": b
                }
                console.log($scope.imageSize);
                return $scope.imageSize;
            };
            $scope.onImgLoad = function(event) {
            }
            $scope.showImg = function(i) {
                if (i <= 1) {
                    return true;
                } else
                    return false;
            };
            $scope.atento_menu = [{
                    title: "Inicio",
                    href: "index.html",
                    icon: "",
                    submenu: []
                },
                {
                    title: "Acerca de Nosotros",
                    href: "#",
                    icon: "",
                    submenu: [{
                            title: "Somos Atento",
                            href: "nosotros.html",
                            icon: "",
                            submenu: []
                        }
                    ]
                },
                {
                    title: "Unete al Equipo",
                    href: "unete.html",
                    icon: "",
                    submenu: []
                },
                {
                    title: "Sala de Prensa",
                    href: "index.html",
                    icon: "",
                    submenu: [
                        {
                            title: "Notas de Prensa",
                            href: "prensa.html",
                            icon: "",
                            submenu: []
                        },
                        {
                            title: "Imagenes/Videos",
                            href: "galeria.html",
                            icon: "",
                            submenu: []
                        }
                    ]
                },
                {
                    title: "Contacto",
                    href: "contacts.html",
                    icon: "",
                    submenu: []
                }

            ];

            $scope.sociallinks = [{
                    title: "Twitter",
                    link: "https://twitter.com/atentoCorp",
                    icon: "icon icon-xs icon-darker fa fa-twitter",
                    circle: "icon icon-xs icon-darker fa fa-circle fa-stack-2x"
                },
                {
                    title: "Linkedin",
                    link: "https://www.linkedin.com/company/atento",
                    icon: "icon icon-xs icon-darker fa fa-linkedin",
                    circle: "icon icon-xs icon-darker fa fa-circle"
                }, {
                    title: "Facebook",
                    link: "https://www.facebook.com/pages/atento-peru/109595615734882",
                    icon: "icon icon-xs icon-darker fa fa-facebook",
                    circle: "icon icon-xs icon-darker fa fa-circle"
                }
            ];

            $scope.prensa = [
                {
                    year: 2017,
                    content: [{
                            date: "ener 01",
                            title: "Atento inaugura nuevo centro de relación con clientes en Roque Sáenz Peña, Argentina",
                            description: "Se trata del segundo centro de relación con clientes que Atento abre en la provincia de Chaco en Argentina, siendo la compañía una de las más dinámicas en esta geografía Chaco ofrece acceso a una amplia base de profesionales cualificados y con un alto grado de motivación, propiciando así la expansión a nivel provincial de Atento Atento incorporará 200 profesionales en una primera fase de este centro",
                            pdf: "http://atento.com/downloads/press-releases/attto-nuevo-centro-roque-argentina-sp.pdf"
                        }, {
                            date: "feb 01",
                            title: "Atento Announces Pricing of Senior Secured Notes",
                            description: "",
                            pdf: "http://atento.com/downloads/press-releases/atto-atento-announces-pricing-senior-secured-notes-en.pdf"
                        }, {
                            date: "mar 01",
                            title: "Atento anuncia fecha de publicación de resultados del segundo trimestre de 2017",
                            description: "",
                            pdf: "http://atento.com/downloads/press-releases/atto-q2-earnings-announcement-sp.pdf"
                        }]
                },
                {
                    year: 2016,
                    content: [{
                            date: "dic 27",
                            title: "Atento anuncia el pago anticipado de obligaciones brasileñas por un valor de US$ 30 millones",
                            description: "",
                            pdf: "http://atento.com/downloads/press-releases/atto-debt-prepayment-sp.pdf"
                        }, {
                            date: "nov 30",
                            title: "Atento Argentina obtuvo 5 premios AMDIA, con uno de ellos se llevó el Grand Prix",
                            description: "Se trata del máximo galardón al Marketing Directo e Interactivo de la Argentina."
                                    + "Atento ganó dos Premios Oro, dos Plata y un Bronce, y con el caso Pilotos de las Redes Sociales, estrategia implementada para el cliente General Motors se alzó con el Grand Prix, el trofeo más importante de la premiación.",
                            pdf: "http://atento.com/downloads/press-releases/atto-atento-recibe-5-premios-amdia-en-argentina-sp.pdf"
                        }, {
                            date: "nov 30",
                            title: "Atento anuncia la compra de acciones ordinarias en el mercado abierto por parte de un miembro de su Consejo de Administración",
                            description: "",
                            pdf: "http://atento.com/downloads/press-releases/atto-david-garner-purchase-of-shares-sp.pdf"
                        }]
                },
                {
                    year: 2015,
                    content: [{
                            date: "ago 01",
                            title: "",
                            description: "",
                            pdf: ""
                        }]
                }, {
                    year: 2014,
                    content: [{
                            date: "ago 01",
                            title: "",
                            description: "",
                            pdf: ""
                        }]
                }, {
                    year: 2013,
                    content: [{
                            date: "ago 01",
                            title: "",
                            description: "",
                            pdf: ""
                        }]
                }, {
                    year: 2012,
                    content: [{
                            date: "ago 01",
                            title: "",
                            description: "",
                            pdf: ""
                        }]
                }
            ];
            $scope.galeria = {
                "data-1": {
                    title: "Instalaciones",
                    photos: [{
                            href: "images/galeria/iv_facilities/facilities_563d08253d5ec.jpg",
                            title: "Customer Experience Center Mexico",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abc37b0fe3.jpg",
                            title: "Centro de operaciones de Atento en Brasil_1",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abc8f311fb.jpg",
                            title: "Centro de operaciones de Atento en Brasil_2",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abc9df17aa.jpg",
                            title: "Centro de operaciones de Atento en Brasil_3",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abc741872c.jpg",
                            title: "Centro de operaciones de Atento en Brasil_4",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abcbc2ed73.jpg",
                            title: "Centro de operaciones de Atento en Brasil_5",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abd5290b6c.jpg",
                            title: "Atento-Centro de Excelencia de RR.HH.-Sao Paulo-Brasil 1",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abd8749e43.jpg",
                            title: "Atento-Centro de Excelencia de RR.HH.-Sao Paulo-Brasil 2",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abd9786276.jpg",
                            title: "Atento-Centro de Excelencia de RR.HH.-Sao Paulo-Brasil 3",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abda5f3e62.jpg",
                            title: "Atento-Centro de Excelencia de RR.HH.-Sao Paulo-Brasil 4",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abdfae61a3.jpg",
                            title: "Área de descanso-Centro de operaciones de Atento-Brasil 1",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abe0e258ff.jpg",
                            title: "Área de descanso-Centro de operaciones de Atento-Brasil 2",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abe2278466.jpg",
                            title: "Área de descanso-Centro de operaciones de Atento-Brasil 3",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557abe64e0c87.jpg",
                            title: "Atento-Área de formación-Sao Paulo-Brasil",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557ac142550ad.jpg",
                            title: "Atento en Sao Bernardo do Campo-Sao Paulo-Brasil",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557ac1967e02d.JPG",
                            title: "Centro de Atento en Arboledas-México",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557ac1ae049e3.JPG",
                            title: "Campus de Atento La Molina-Perú 1",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557ac1c033b28.JPG",
                            title: "Campus de Atento La Molina-Perú 2",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557ac1d4a788a.JPG",
                            title: "Campus de Atento La Molina-Perú 3",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557ac1ea0c47c.JPG",
                            title: "Campus de Atento La Molina-Perú 4",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557ac1f823f7e.JPG",
                            title: "Campus de Atento La Molina-Perú 5",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_557ac20571649.JPG",
                            title: "Campus de Atento La Molina-Perú 6",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_559255405c869.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 1",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_559258750496e.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 2",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_559258e9efb54.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 3",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_5592591fa15a7.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 4",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_5592595eb09af.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 5",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_5592599937ff1.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 6",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_559259ea00327.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 7",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_55925a1c9a651.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 8",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_55925a80b88c5.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 9",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_55925aca9351c.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 10",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_55925b0a7974d.jpg",
                            title: "Centro de Gestión de Operaciones de última generación en México D. F. 11",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_55927349deb5c.JPG",
                            title: "Centro de Gestión de Operaciones de Nearshore en El Salvador-Entrada",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_559275a6a0237.JPG",
                            title: "Nearshore Operations Command Center El Salvador-Cafetería",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_55927badbbe37.JPG",
                            title: "Centro de Gestión de Operaciones de Nearshore en El Salvador-Área de descanso",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_55927c808fba4.JPG",
                            title: "Centro de Gestión de Operaciones de Nearshore en El Salvador",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_facilities/employee_55f1c3431ab6e.jpg",
                            title: "",
                            hash: ""
                        }, ]
                },
                "data-2": {
                    title: "Comité de Dirección",
                    photos: [{
                            href: "images/galeria/iv_leadership/employee_557e8842629d1.jpg",
                            title: "Alejandro Reynal-CEO de Atento_1",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/employee_55915bf227193.jpg",
                            title: "Reyes Cerezo-Directora de Cumplimiento Legal y Normativo",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/employee_55916cfc52634.jpg",
                            title: "Mauricio Montilha- Chief Financial Officer (CFO)",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/leadership_56325fab7ea23.png",
                            title: "Daniel V. Figueirido - Chief Commercial Officer",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/employee_55916e3500634.jpg",
                            title: "Michael L. Flodin-Director de Operaciones y Tecnología",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/employee_55916ea41e64f.jpg",
                            title: "Iñaki Cebollero-Director de Recursos Humanos",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/employee_55916fd54a9f5.jpg",
                            title: "Miguel Matey-Director Atento México y Región Americas Norte",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/employee_55917082d7dd1.jpg",
                            title: "Juan E. Gamé-Director Atento Chile y Región Américas Sur",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/employee_5591713500a57.jpg",
                            title: "Jose María Pérez Melber-Director Atento España y Región EMEA",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/leadership_56e97ded3cf36.jpg",
                            title: "Mário Câmara - Director Región Brasil",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/employee_55915b302835a.jpg",
                            title: "Alejandro Reynal-CEO de Atento_3",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_leadership/employee_55915a7f15434.jpg",
                            title: "Alejandro Reynal-CEO de Atento_2",
                            hash: ""
                        }, ]
                },
                "data-3": {
                    title: "Noticias y Reconocimientos",
                    photos: [{
                            href: "images/galeria/iv_services/services_563d073a9d0fe.jpg",
                            title: "Customer Experience Center Mexico",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/services_563d08e30a8e4.jpg",
                            title: "Inauguración nuevo centro de relación con clientes de Atento en Pereira, Colombia",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_55814976011d7.jpg",
                            title: "Premio ABEMD 2015-Agencia del Año en la especialidad de Call Center/Contact Center",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_55829f77e118d.jpg",
                            title: "Atento sale a bolsa en el NYSE (New York Stock Exchange)_Oct 2014_1",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_55829fe5d6465.jpg",
                            title: "Atento sale a bolsa en el NYSE (New York Stock Exchange)_Oct 2014_2",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_5582a083ec06d.jpg",
                            title: "Equipo de Liderazgo-Atento sale a Bolsa",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_5582a13b730e4.jpg",
                            title: "Alejandro Reynal-CEO de Atento-inicia la oferta de acciones en Bolsa_1",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_5582a2087aac8.jpg",
                            title: "Alejandro Reynal-CEO de Atento-inicia la oferta de acciones en Bolsa_2",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_5582a2fa5cbed.jpg",
                            title: "Equipo de Liderazgo de Atento en el toque de campaña en el NYSE",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_5582a3fe5e2ea.jpg",
                            title: "Alejandro Reynal-CEO de Atento-cierra el día en la Bolsa de Nueva York (NYSE)",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_5582a4b94bf33.jpg",
                            title: "Equipo de Liderazgo de Atento cierra el día en la Bolsa de Nueva York (NYSE)",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_5582a575b4eb3.jpg",
                            title: "Atento sale a bolsa en el NYSE (New York Stock Exchange)_Oct 2014_3",
                            hash: ""
                        }, {
                            href: "images/galeria/iv_services/employee_5592639c6207a.jpg",
                            title: "Atento Mexico GPTW 2015-Representantes de GPTW con V Rivas, B Rivas, JA Olivares&M Matey de Atento",
                            hash: ""
                        }, ]
                },
            };

        });
