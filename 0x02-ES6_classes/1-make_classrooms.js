import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const r1 = new ClassRoom(19);
  const r2 = new ClassRoom(20);
  const r3 = new ClassRoom(34);
  const las = [r1, r2, r3];
  return (las);
}
