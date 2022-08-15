import { NextApiRequest, NextApiResponse } from 'next';
import { IPlace } from '../../app/types/place';
import japan from '../../assets/images/japan.jpg';
import italy from '../../assets/images/italy.jpg';

const places: IPlace[] = [
  {
    slug: 'tokyo',
    description: 'loremIpsum',
    imagePath: 'http://localhost:3000/images/places/japan.jpg',
    location: { country: 'Japan', city: 'Kyoto' },
    rating: 5,
    duration: '10 days',
    distance: 5000,
    googleMapLink: 'ewe',
    mapImage: 'dwdew',
  },
  {
    slug: 'roma',
    description: 'loremIpsum',
    imagePath: 'http://localhost:3000/images/places/italy.jpg',
    location: { country: 'Italy', city: 'Roma' },
    rating: 3,
    duration: '6 days',
    distance: 2300,
    googleMapLink: 'ewe',
    mapImage: 'dwdew',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places);
}
