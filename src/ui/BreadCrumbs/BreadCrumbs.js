import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './BreadCrumbs.module.css';

const BreadCrumbs = () => {
  const breadcrumbs = useSelector((state) => state.bread.breadCrumbsData);

  return (
    <div className="container">
      {breadcrumbs.length > 1 && (
        <div className={classes.containerForLocations}>
          {breadcrumbs.map((breadcrumb) => {
            return breadcrumb.route ? (
              <Link
                className={classes.link}
                key={breadcrumb.route_name}
                to={breadcrumb.route}
              >
                <p className={classes.previousLocation}>
                  {breadcrumb.route_name}
                  <span className={classes.slash}>/</span>
                </p>
              </Link>
            ) : (
              <p
                key={breadcrumb.route_name}
                className={classes.currentLocation}
              >
                {breadcrumb.route_name}
              </p>
            );
          })}
        </div>
      )}{' '}
    </div>
  );
};

export default BreadCrumbs;
