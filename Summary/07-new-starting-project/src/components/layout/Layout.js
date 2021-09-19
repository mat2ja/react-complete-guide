import classes from './Layout.module.css';
import MainNavigation from './MainNavigation.js';

export default function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
