class Point {
  protected _x: number;
  protected _y: number;

  get x() {
      return this._x;
  }

  get y() {
      return this._y;
  }

  constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
  }

  getCoordinates() {
      return [this._x, this._y];
  }
}

class Point3D extends Point {
  private _z: number;

  get z() {
      return this._z;
  }

  constructor(x: number, y: number, z: number) {
      super(x, y);
      this._z = z;
  }

  getCoordinates() {
      return [this._x, this._y, this._z]
  }
}

const point3d = new Point3D(1, 2, 3);