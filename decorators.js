import * as ng from 'angular2/angular2';

// These wrappers will be part of angular2 proper.
function addAnnotation(cls, anno) {
  cls.annotations = cls.annotations || [];
  cls.annotations.push(anno);
}

function makeDecorator(annotationCls) {
  return (...args) => {
    var annotation = new annotationCls(...args);
    return (cls) => {
      addAnnotation(cls, annotation);
    }
  }
}

export const Component = makeDecorator(ng.Component);
export const Template = makeDecorator(ng.Template);
