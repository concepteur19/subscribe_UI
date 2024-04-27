declare module '*.svg' {
  // const content: string;//React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  // export default content;

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  // const content: string;//React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  // export default content;

  export const ReactComponent: React.FC<React.PNGProps<PNGPNGElement>>;
  const src: string;
  export default src;
}
