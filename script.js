const text = {
    step1: {
        title: 'Light Energy',
        desc: '<p>There are waves of photons around us that get reflected, absorbed, refracted, transmitted and more. Light photons get transmitted into the cornea. \
        This is the first step of vision. The pupil is black to absorb these photons. The ciliary muscles in the lens help focus light, changing the lens\'s power of refraction</p>',
        img: ['./assets/retina.png'],
        order: null
    },

    step2: {
        title: 'Transduction 1.1: Photoreceptors',
        desc: 'The first step of transforming light energy into neural signals begins in the retina, which is made up of photoreceptors',
        img: ['assets/trans.png'],
        order: [
            { 
                part: 'rod', 
                description: 'Photoreceptor cells that are highly sensitive to light and enable vision in low-light conditions. They do not detect color but are essential for night vision. They are mainly around the periphery of the retina.' 
            },
            { 
                part: 'cone', 
                description: 'Photoreceptor cells responsible for color vision and visual detail. They function best in bright light and are concentrated in the central retina (fovea).' 
            },
            { 
                part: 'photopigment', 
                description: 'Light-sensitive molecules in photoreceptor cells (rods and cones). They undergo chemical changes when struck by light, initiating the neural signals for vision. Photopigments consist of a protein called opsin and a light-absorbing molecule called retinal. When absorbing light, the photopigment breaks down and then needs to regenerate. This regeneration is faster in cones than in rods.' 
            }
        ]
    },

    step3: {
        title: 'Transduction 1.2: Bipolar Cells',
        desc: 'The release of Glutamate from photoreceptors is regulated based on the presence or absence of light. The photoreceptors synapse with bipolar cells. ON-bipolar cells are excited when glutamate release decreases. OFF-bipolar cells are inhibited when glutamate release decreases. Both of these cell types synapse with photoreceptors. Other types are diffuse bipolar cells and midget bipolar cells.',
        img: ['assets/trans1.2.png'],
        order: [
            {
                part: "Diffuse Bipolar Cells",
                description: "A subtype of cone bipolar cells that receive input from multiple rods and cones in the periphery. They integrate light signals over a larger area of the retina, trading spatial resolution for sensitivity."
            },
            {
                part: "Midget Bipolar Cells",
                description: "A subtype of cone bipolar cells that receive input from a single cone photoreceptor. They provide high spatial resolution, especially in the fovea, and are crucial for fine detail and color vision."
            }
        ]
        
    },

    step4: {
        title: 'Transduction 1.3: Ganglion Cells',
        desc: 'After bipolar cells, the visual processing pathway progresses to the ganglion cells.',
        img: ['assets/trans1.3.png', {'image': 'assets/download.png', 'caption': 'A visual of how edges are detected by ganglion cells.'}

        ],
        order: [
            {
                part: "Amacrine Cells",
                description: "Amacrine cells are between bipolar cells and retinal ganglion cells. They provide feedback and feedforward inhibition to ganglion cells and other bipolar cells, enhancing contrast and visual acuity."
            },
            {
                part: "M Ganglion Cells",
                description: "M (Magnocellular) ganglion cells receive input from diffuse bipolar cells and specialize in detecting motion and rapid changes in luminance. They have large receptive fields, making them highly sensitive to motion but less capable of detecting fine details or color. M cells transmit signals via the magnocellular pathway, which is crucial for processing dynamic and temporal visual stimuli."
            },
            {
                part: "P Ganglion Cells",
                description: "P (Parvocellular) ganglion cells receive input from midget bipolar cells and are responsible for detecting fine spatial details and color. They have small receptive fields, which allow them to provide high spatial resolution. P cells transmit signals via the parvocellular pathway, which is essential for processing color and static object details."
            },
            {
                part: "Lateral Geniculate Nucleus (LGN)",
                description: "The LGN is a structure in the thalamus that serves as a relay station for visual information traveling from the retina to the visual cortex. It has six distinct layers, with M cells occupying layers 1-2 and P cells occupying layers 3-6. The LGN processes and organizes visual signals, including motion, color, and spatial detail, before sending them to the primary visual cortex for further processing."
            },
            {
                part: "Horizontal Cells",
                description: "Horizontal cells create lateral pathways between photoreceptors. When one is stimulated, it inhibits photoreceptors and bipolar cells that are further away, creating lateral inhibition, thus enhancing edge detection."
            }
        ]
        
    },


    step5: {
        title: 'Our Visual Fields',
        desc: 'The right side of each retina takes in information from our left visual field and the left side takes in information from the right visual field. The point where our fields merge creates binocular vision, which allows us to view the world in 3D. ',
        img: ['assets/fields2.png'],
        order: []
    },


    step6: {
        title: 'Transduction 1.4: To the Brain!',
        desc: 'The LGN is the main relay station for visual information and is located in the thalamus.',
        img: ['assets/trans1.4.png'],
        order: [
            {
                part: "Optic Nerve",
                description: "The optic nerve is formed by the axons of ganglion cells, which transmit visual information from the retina to the brain. It carries the visual signals for both the left and right visual fields from both eyes."
            },
            {
                part: "Optic Chiasm",
                description: "At the optic chiasm, the optic nerves from both eyes meet and partially cross. The fibers from the nasal (inner) half of each retina cross to the opposite side of the brain, while the fibers from the temporal (outer) half remain on the same side. This ensures that visual information from the right visual field is processed in the left hemisphere and vice versa."
            },
            {
                part: "Optic Tract",
                description: "After the optic chiasm, the visual information continues as the optic tracts. The optic tracts carry the visual information from both eyes to the LGN."
            }
        ]        
    },

     step7: {
        title: 'Visual Cortices',
        desc: 'All of this information gets processed in the visual cortices in the brain. There are 4 major ones.',
        img: ['assets/cortices.png'],
        order: [{
                part: "V1",
                description: "V1 is the primary visual cortex and is located in the occipital lobe at the back of the brain. It recognizes information such as color, shape, and orientation. The hypercolumn is a 1mm block within V1 that handles ocular dominance for each eye and orientation. V1 has retinotopic mappping, meaning that adjacent areas of the eye are mapped to adjacent hypercolumns. From there, it sends input to either the parietal or temportal cortex."
            },
            {
                part: "V2",
                description: "This cortex further processes the information from V1 and integrates more complex features about color and texture. It passes on information to V3, V4, and V5. It also has a feedback loop with V1 to allow for continuous refinement of vision and context-dependent adjustments."
            },
            {
                part: "V3",
                description: "V3 plays a larger role with motion and integrating basic shapes into more complex ones. It sends the signal further down to V4"
            },
            {
                part: "V4",
                description: "This cortex is crucial for object detection. Here, cells are triggered by stimuli like pinwheels and fans. As input progresses to each cortex, they begin to recogize more complex stimuli."
            }
        ]
    },

    step8: {
        title: 'Object Recognition',
        desc: 'The different parts of the brain communicate in parallel to recognize objects. We use top-down and bottom-up processing to make sense of our surroundings. ',
        img: ['assets/process.png'],
        order: [
            {
                part: "Top-down processing",
                description: "Top-down processing is when we use our previous experiences to fill in the gaps of our sensory input. It guides our perception of our senses."
            },
            {
                part: "Bottom-up processing",
                description: "Bottom-up processing begins at sensory input of our retina, then travels through the visual cortices. Our brain interprets this stimuli so the viewer can understand and perceive. This form does not have the influence of prior knowledge or expections like Top-down processing does."
            }
        ]
    },

    step9: {
        title: 'Gestalt Rules',
        desc: 'There are many ways we interpret the final retinal image. These set of rules are called the Gestalt Rules. The rules involve Good figure, proximity, similarity, continuation, closure, and symmetry.',
        img: ['assets/gestalt.png'],
        order: [
            {
                part: "Proximity",
                description: "Objects that are close to each other are perceived as part of the same group. This helps us organize elements into clusters or groups."
            },
            {
                part: "Similarity",
                description: "Elements that look similar are perceived as belonging together. This rule is often based on shape, color, or size."
            },
            {
                part: "Closure",
                description: "Our mind tends to fill in missing parts of a shape or image to see it as a complete object. This helps us perceive wholeness even when information is incomplete."
            },
            {
                part: "Figure-Ground",
                description: "We automatically separate elements into a 'figure' (main focus) and a 'ground' (background). This distinction helps us focus on specific parts of a scene."
            },
            {
                part: "Continuity",
                description: "We perceive lines and patterns as continuing in a smooth path rather than as separate elements. This creates a sense of flow and direction."
            },
            {
                part: "Common Fate",
                description: "Objects moving in the same direction are perceived as part of the same group. This is often used in UX/UI design to group related items by moving them in the same direction and guide user interaction."
            }
        ]
    },


    step10: {
        title: 'And that is our visual sensory pathway!',
        desc: '',
        img: ['assets/eye.png'],
        order: []
    }
}

let step = 1

let desc = document.getElementById("description")
let title = document.getElementById('header')
let img = document.getElementById('image-box')
let pic = document.getElementById('image-box2')
let cap = document.getElementById('caption')

title.innerHTML = text['step1']['title']
desc.innerHTML = text['step1']['desc']
let but = document.getElementById("backBtn");
let nextb = document.getElementById("nextBtn");

if (step === 1) {
    but.style.display = 'none';
}

function next(e) {
    e.preventDefault();
    pic.src = ''
    cap.innerHTML = ''
    step += 1;
    if (step != 1) {
        but.style.display = 'inline';
    }

    if (step === 11) {
        step = 1;
    }

    let index = 'step' + step;

    if (step === 10) {
        nextb.value = "Start over"
    }

    img.src = text[index]['img'][0];
    if (text[index]['img'].length > 1) {
        pic.src = text[index]['img'][1]['image']
        cap.innerHTML = text[index]['img'][1]['caption']
    }
    title.innerHTML = text[index]['title'];
    desc.innerHTML = text[index]['desc'];

    const order = text[index]['order'];
    if (order !== null) {
        let additionalContent = '';

        order.forEach(item => {
            additionalContent += `
                <h4>${item.part}</h4>
                <ul>
                    <li>${item.description}</li>
                </ul>
            `;
        });

        desc.innerHTML += additionalContent;
    }
}

function back(e) {
    e.preventDefault();
    step -= 1;

    if (step === 0) {
        step = 1;
    }
    if (step === 1) {
        but.style.display = 'none';
    }
    let index = 'step' + step;

    img.src = text[index]['img'][0];
    if (text[index]['img'].length > 1) {
        pic.src = text[index]['img'][1]['image']
        cap.innerHTML = text[index]['img'][1]['caption']
    }
    title.innerHTML = text[index]['title'];
    desc.innerHTML = text[index]['desc'];

    
    const order = text[index]['order'];
    if (order !== null) {
        let additionalContent = '';

        order.forEach(item => {
            additionalContent += `
                <h4>${item.part}</h4>
                <ul>
                    <li>${item.description}</li>
                </ul>
            `;
        });

        
        desc.innerHTML += additionalContent;
    }
}