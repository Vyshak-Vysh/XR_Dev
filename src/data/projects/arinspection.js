export default { 
    id: 1,
    show: true,
    slug: 'ai-ar-inspection',
    link: '/project/ai-ar-inspection',
    cardImage: '/images/Robotic_ARM/Robotic_ARM.png',
    title: 'AI-Driven AR Inspection System' ,
    role: 'AR/VR Developer',
    types: ['Industrial AR', 'Mobile App', 'Unity'],
    shortDescription: 'A production-focused industrial AR solution designed to detect and visualize real-time spatial deviations in mechanical systems using Unity 6 and OpenCV.',
    tags: ['AR', 'Unity 6', 'OpenCV', 'iOS', 'AI', 'Industrial'],
    link1:[''],
    citation:'',
    mainArt: {
      type: 'image',
      src: '/images/Robotic_ARM/Robotic_ARM.png',
      alt: 'AI-Driven AR Inspection System',
      description: ''
    },
  
    summaryHtml: `
      <h3>Overview</h3>
      <p>
      A cutting-edge industrial AR solution developed to revolutionize mechanical inspection processes. 
      Built with Unity 6 and integrated with OpenCV, this application enables real-time detection and visualization 
      of spatial deviations in robotic arms and mechanical systems.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Real-Time 3D Deviation Analysis:</strong> Leverages computer vision to detect and visualize deviations in real-time</li>
        <li><strong>Precise Visual Overlays:</strong> Provides accurate measurement, alignment, and inspection overlays</li>
        <li><strong>Mobile AR Deployment:</strong> Deployed as a native iOS application for iPad accessibility</li>
        <li><strong>AI-Powered Detection:</strong> Uses machine learning for intelligent anomaly detection</li>
      </ul>

      <h3>Impact</h3>
      <ul>
        <li>Reduced manual inspection errors significantly</li>
        <li>Enabled early defect detection in production pipelines</li>
        <li>Improved industrial quality assurance workflows</li>
        <li>Reduced downtime and rework costs</li>
      </ul>

      <h3>Technical Stack</h3>
      <ul>
        <li><strong>Unity 6:</strong> Game engine and AR development platform</li>
        <li><strong>C#:</strong> Programming language for Unity development</li>
        <li><strong>OpenCV:</strong> Computer vision library for deviation detection</li>
        <li><strong>ARKit:</strong> Apple's AR framework for iOS device tracking</li>
        <li><strong>Python (backend):</strong> OpenCV, Yolo for Backend processing and data handling</li>
        <li><strong>iOS SDK:</strong> Native iOS development tools and frameworks</li>
      </ul>
    `,
  
    gallery: [
      {
        type: 'image',
        src: '/images/Robotic_ARM/Vuforia Model.png',
        alt: 'Vuforia Model',
        bottomText: 'Vuforia Model'
      },
      {
        type: 'image',
        src: '/images/Robotic_ARM/Inspection Results.png',
        alt: 'Inspection Results',
        bottomText: 'Inspection Results'
      },
      {
        type: 'image',
        src: '/images/Robotic_ARM/Realtime AR Model.png',
        alt: 'Realtime AR Model',
        bottomText: 'Precision measurement overlays'
      },
      {
        type: 'image',
        src: '/images/Robotic_ARM/analyzed_Capture.png',
        alt: 'Analyzed Capture',
        bottomText: 'Analyzed Capture'
      },
      {
        type: 'image',
        src: '/images/Robotic_ARM/Robotic_ARM_1.png',
        alt: 'Robotic ARM',
        bottomText: 'Real-time deviation visualization'
      }
    ]
}
