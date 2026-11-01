export default {
  id: 'webxr-desert',
  slug: 'webxr-desert',
  link: '/project/webxr-desert',
  show: true,
  title: 'WebXR Cross-Platform XR Experience',
  role: 'Web XR Developer',
  types: ['WebXR', 'Browser-Based', 'Unity'],
  cardImage: '/images/WebXR_Prj/WebXR_pic.png',
  shortDescription: 'A browser-based desert-themed XR environment accessible without native installation, optimized for mobile, PC, and VR browsers.',
  tags: ['WebXR', 'AR', 'VR', 'Unity', 'Web3D', 'Cross-Platform'],
  // externalLink: 'https://drive.google.com/file/d/1_ZhkjfSrmrJwIFZcLBNW6vsCA_I1Zh2D/view?usp=sharing',
  // externalLinkText: 'WebXR Experience',
  // externalLinkTitle: 'WebXR Cross-Platform XR Experience',
  mainArt: {
    type: 'image',
    src: '/images/WebXR_Prj/WebXR_pic.png',
    alt: 'WebXR Cross-Platform XR Experience',
    description: ''
  },
  summaryHtml: `
    <h3>Overview</h3>
    <p>A WebXR-based immersive desert exploration experience built using Unity WebGL, accessible directly through web browsers. The application supports VR headsets, AR-capable mobile devices, and desktop browsers, enabling users to experience XR content without installing native applications.</p>

    <h3>Key Features</h3>
    <ul>
      <li><strong>Cross-Platform Compatibility:</strong> Works seamlessly on mobile browsers, PCs, and WebXR-supported VR headsets</li>
      <li><strong>No Installation Required:</strong> Instant access via URL using WebXR-enabled browsers</li>
      <li><strong>AR & VR Modes:</strong> Single Unity project supporting both AR and VR experiences</li>
      <li><strong>Optimized Performance:</strong> Designed for low-poly environments and varied hardware capabilities</li>
      <li><strong>Intuitive Interaction:</strong> Touch, gaze, and controller-based interactions depending on device</li>
    </ul>

    <h3>Technical Stack</h3>
    <ul>
      <li>Unity (WebGL Build Target)</li>
      <li>De-Panther WebXR Plugin for Unity</li>
      <li>WebXR Device API</li>
      <li>WebGL & HTML5 Canvas</li>
      <li>JavaScript–Unity WebXR bridge</li>
      <li>Asset and draw-call optimization for web delivery</li>
    </ul>

    <h3>Accessibility & Performance</h3>
    <ul>
      <li>Adaptive quality settings based on device performance</li>
      <li>Reduced bundle size for faster loading</li>
      <li>Progressive enhancement for AR, VR, and desktop users</li>
      <li>Touch, gesture, and controller support</li>
    </ul>

    <h3>Impact</h3>
    <p>Demonstrated how Unity-based WebXR applications can deliver immersive XR experiences directly through the browser, significantly lowering entry barriers and expanding XR access to a wider audience.</p>
  `,

  gallery: [
      {
        type: 'video',
        src: '/images/WebXR_Prj/WebXR_Video.mp4',
        alt: 'WebXR Experience Video',
        topText: '',
        bottomText: 'WebXR Cross-Platform Experience',
        controls: true,
        autoplay: true,
        loop: true,
        muted: true
      },

  ]    
  
};
