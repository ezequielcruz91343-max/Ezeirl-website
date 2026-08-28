import "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: import("@react-three/fiber").Object3DNode<
        import("three").Mesh,
        typeof import("three").Mesh
      >;
      group: import("@react-three/fiber").Object3DNode<
        import("three").Group,
        typeof import("three").Group
      >;
      boxGeometry: import("@react-three/fiber").Object3DNode<
        import("three").BoxGeometry,
        typeof import("three").BoxGeometry
      >;
      sphereGeometry: import("@react-three/fiber").Object3DNode<
        import("three").SphereGeometry,
        typeof import("three").SphereGeometry
      >;
      planeGeometry: import("@react-three/fiber").Object3DNode<
        import("three").PlaneGeometry,
        typeof import("three").PlaneGeometry
      >;
      meshStandardMaterial: import("@react-three/fiber").MaterialNode<
        import("three").MeshStandardMaterial,
        typeof import("three").MeshStandardMaterial
      >;
      pointLight: import("@react-three/fiber").Object3DNode<
        import("three").PointLight,
        typeof import("three").PointLight
      >;
      ambientLight: import("@react-three/fiber").Object3DNode<
        import("three").AmbientLight,
        typeof import("three").AmbientLight
      >;
    }
  }
}
