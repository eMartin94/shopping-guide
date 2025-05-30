export const options = [
  { value: 'upperFloor', label: 'Planta Alta' },
  { value: 'groundFloor', label: 'Planta Baja' },
];

export const dayTranslations = {
  monday: 'Lunes',
  tuesday: 'Martes',
  wednesday: 'Miércoles',
  thursday: 'Jueves',
  friday: 'Viernes',
  saturday: 'Sábado',
  sunday: 'Domingo',
};

export const svgClasses = (svgId, activeId) =>
  `stroke-gray-500 ${
    svgId === activeId ? 'fill-blue-400' : 'fill-white hover:fill-blue-300'
  } transition-all duration-700`;
