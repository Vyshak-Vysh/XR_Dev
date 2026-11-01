export default { 
    id: 3,
    show: true,
    slug: 'archviz-visualization',
    link: '/project/archviz-visualization',
    cardImage: '/images/UE_Dubai/Archviz.png',
    title: 'ArchViz & Interactive Interior Visualization' ,
    role: 'VR Developer',
    types: ['VR Walkthrough', 'Visualization', 'Unreal Engine'],
    shortDescription: 'A high-fidelity, interactive Dubai apartment replica built for immersive architectural visualization with real-time customization capabilities.',
    tags: ['VR', 'Unreal Engine', 'Blender', 'ArchViz', 'Real Estate', 'Photorealism'],
    // externalLink: 'https://drive.google.com/drive/folders/1KX1zORN5uA7MWT8IxcBJK8I0O87kaARy?usp=drive_link',
    // externalLinkText: 'Archviz Model',
    // externalLinkTitle: 'Archviz Model',
    // link1:[''],
    citation:'',
    mainArt: {
      type: 'image',
      src: '/images/UE_Dubai/Archviz.png',
      alt: 'Dubai Apartment Visualization',
      // description: '<a href="https://drive.google.com/drive/folders/1KX1zORN5uA7MWT8IxcBJK8I0O87kaARy?usp=sharing" target="_blank" rel="noopener noreferrer" class="drive-link" title="Archviz Model"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span class="drive-link-text">Archviz Model</span></a>'
    },
    secondaryArt: {
      type: 'video',
        src: '/images/UE_Dubai/Interior_Design.mp4',
        alt: 'Interior Design Walkthrough',
        // description: '',
        topText: '',
        bottomText: 'Interior Design Walkthrough',
        controls: true,
        autoplay: true,
        loop: true,
        muted: true
    },
    summaryHtml: `
      <h3>Overview</h3>
      <p>
      A photorealistic VR environment replicating a luxury Dubai apartment. This immersive experience combines 
      architectural accuracy with interactive design elements, allowing clients to explore, customize, and validate 
      design decisions in real-time within a fully realized virtual space.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>High-Fidelity Modeling:</strong> Meticulously detailed asset creation using Blender</li>
        <li><strong>Advanced Lighting:</strong> Baked lighting with realistic material properties for photorealism</li>
        <li><strong>Interactive Walkthroughs:</strong> Smooth navigation and VR interaction mechanics</li>
        <li><strong>Real-Time Customization:</strong> Dynamic interior element customization during experience</li>
        <li><strong>Performance Optimized:</strong> Stable 90+ FPS on VR hardware</li>
      </ul>

      <h3>Use Cases</h3>
      <ul>
        <li>Real estate marketing and client presentations</li>
        <li>Interior design validation and decision-making</li>
        <li>Client design consultation and feedback</li>
        <li>Property visualization before construction completion</li>
      </ul>

      <h3>Technical Achievements</h3>
      <p>
      <strong>Tools:</strong> Unreal Engine 5, Blender, Substance Painter<br>
      <strong>Optimization:</strong> LOD systems, texture atlasing, reduced draw calls<br>
      <strong>Scale Accuracy:</strong> 1:1 architectural scale with precise measurements
      </p>
    `,
  
    gallery: [
      {
        type: 'image',
        src: '/images/UE_Dubai/BathRoom.png',
        alt: 'Bathroom',
        bottomText: 'Modern Sanctuary'
      },
      {
        type: 'image',
        src: '/images/UE_Dubai/Hall.png',
        alt: 'Hall',
        bottomText: 'Grand Entrance'
      },
      {
        type: 'image',
        src: '/images/UE_Dubai/pic.png',
        alt: 'Pic',
        bottomText: 'Virtual Living'
      }
    ]
}
