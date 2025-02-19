export const colorStyles: Record<ColorKey, ColorStyle> = {
  default: {
    base: 'bg-blue-500 text-white',
    hover: 'hover:bg-blue-600',
    disabled: 'bg-gray-200 text-gray-600 cursor-not-allowed',
  },
  lightBlue: {
    base: 'bg-sky-100 text-blue-500',
    hover: 'hover:bg-blue-100',
    disabled: 'bg-blue-300 text-white cursor-not-allowed',
  },
};

export const gradientOptions = [
  {
    id: 'blue',
    label: 'Blue',
    className: 'bg-gradient-to-br from-blue-50 via-blue-100 to-white',
  },
  {
    id: 'pink',
    label: 'Pink',
    className: 'bg-gradient-to-br from-pink-50 via-pink-100 to-white',
  },
  {
    id: 'yellow',
    label: 'Yellow',
    className: 'bg-gradient-to-br from-yellow-50 via-yellow-100 to-white',
  },
  {
    id: 'orange',
    label: 'Orange',
    className: 'bg-gradient-to-br from-orange-50 via-orange-100 to-white',
  },
  {
    id: 'green',
    label: 'Green',
    className: 'bg-gradient-to-br from-green-50 via-green-100 to-white',
  },
  {
    id: 'purple',
    label: 'Purple',
    className: 'bg-gradient-to-br from-purple-50 via-purple-100 to-white',
  },
];
