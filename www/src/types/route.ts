export interface Route {
   path?: string;
   label: string;
   component?: React.FC;
   callback?: Function;
}