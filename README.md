# AngularPolymerSample

## Notes

### general

1. respond to props notifications using angular event binding `(prop-changed)="callback()"`

### `paper-button`

1. can't access to prototype's methods such as `addOwnKeyBinding()`
2. css custom props are not working
3. getting some elements props doesn't update (zone??):
```
  <paper-button #paperButton2Ref raised>pressed:{{ paperButton2Ref.pressed }}</paper-button>
  <paper-button #paperButton3Ref>pointerDown:{{ paperButton3Ref.pointerDown }}</paper-button>
  <paper-button #paperButton1Ref noink>focused:{{ paperButton1Ref.focused }}</paper-button>
```

### `paper-card`

1. card props must be bound to from angular (ie. [animatedShadow]="true")

### `paper-fab`

### `paper-icon-button`

1. registering an element with `is` is not working
```
<button is="paper-icon-button-light"></button>
```