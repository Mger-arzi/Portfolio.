import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "particles": {
                    "number": {
                        "value": 96,
                        "density": {
                            "enable": true,
                            "value_area": 2079.168332666934
                        }
                    },
                    "color": {
                        "value": "#6ad9c4"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#ede1e1"
                        },
                        "polygon": {
                            "nb_sides": 6
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.1,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 63.974410235905665,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 48.5975555429562,
                            "size_min": 8.90955184954197,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 0,
                        "color": "#ffffff",
                        "opacity": 4.15993602558976416,
                        "width": 5.597760895641746
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": true,
                            "rotateX": 3678.528588564576,
                            "rotateY": 2239.104358256698
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "remove"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 206.53961105756386,
                            "size": 12.14938888573905,
                            "duration": 1.7009144440034671,
                            "opacity": 1,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": false
            }}
        />
    );
};