export type Task = {
  id: string;
  name: string;
  createdAt: Date;
  body: string;
  isCompleted: boolean;
  status: 'created' | 'updated' | 'deleted' | 'static';
};

export enum Colors {
  updated = 'orange',
  deleted = 'red',
  static = 'white',
  created = 'green',
}

// Colors enum won't work when using tailwind
export enum TailwindColors {
  updated = 'bg-orange-100',
  deleted = 'bg-red-100',
  static = 'bg-white',
  created = 'bg-green-100',
}
