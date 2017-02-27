export interface PolymerInterface {
  components: string[];
}

export function Polymer (options: PolymerInterface): any {

  return function(target: any, propertyKey: string) {

    const loadComponents = () => {
      return new Promise( (res, rej) => {
        options.components.map((cmp) => {
          const link = document.createElement('link');
          link.rel = 'import';
          link.href = `assets/bower_components/${cmp}/${cmp}.html`;
          document.head.appendChild(link);
          link.onerror = rej;
          link.onload = (e) => res();
        });
      });
    }
    loadComponents();
  }
}
