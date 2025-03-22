export interface NewSightseeing {
  id: string;
  name: string;
  description: string;
  addedDate: string;
  rating: number;
  location: string;
  coordinates: { lat: number; lon: number };
  googleMapsLink: string;
  status: string;
  }