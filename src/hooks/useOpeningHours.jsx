import React, { useEffect, useState } from 'react';

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export const useOpeningHours = (openingHours) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpening, setNextOpening] = useState(null);

  const today = days[new Date().getDay()];
  const currentTime = new Date();

  useEffect(() => {
    function checkOpen() {
      const now = new Date();
      const todayIndex = now.getDay();
      const todayKey = days[todayIndex];

      const todaySchedule = openingHours.find((o) => o.day === todayKey);

      if (!todaySchedule || !todaySchedule.open || !todaySchedule.close) {
        setIsOpen(false);
        setNextOpening(null);
        return;
      }

      const [openHour, openMin] = todaySchedule.open.split(':').map(Number);
      const [closeHour, closeMin] = todaySchedule.close.split(':').map(Number);

      const openTime = new Date(now);
      openTime.setHours(openHour, openMin, 0, 0);

      const closeTime = new Date(now);
      closeTime.setHours(closeHour, closeMin, 0, 0);

      const currentlyOpen = now >= openTime && now <= closeTime;
      setIsOpen(currentlyOpen);

      if (!currentlyOpen) {
        setNextOpening(todaySchedule.open);
      } else {
        setNextOpening(null);
      }
    }

    checkOpen();
    const interval = setInterval(checkOpen, 60 * 1000);
    return () => clearInterval(interval);
  }, [openingHours]);

  return { isOpen, today, currentTime, nextOpening };
};
