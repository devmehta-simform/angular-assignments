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
