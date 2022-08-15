import React, { FC } from 'react';
import Link from 'next/link';
import styles from './PopularPlaces.module.scss';
import { IPlace } from '../../../../types/place';

interface IPopularPlaces {
  places: IPlace[];
}
const PopularPlaces: FC<IPopularPlaces> = ({ places }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular Places</h2>

      {places.map((place) => (
        <Link href={`/place/${place.slug}`} key={place.slug}>
          <a className={styles.item} style={{ backgroundImage: `url('${place.imagePath}')` }}>
            <span className={styles.heading}>
              {place.location.city + ', ' + place.location.country}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PopularPlaces;
