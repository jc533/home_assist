'use server';
import { prisma } from '../../lib/prisma';



export async function createRoom(obj) {
  const user = await prisma.room.create({
    data: obj
  });
  return user;
}

export async function createCabinet(obj) {
  const cabinet = await prisma.cabinet.create({
    data: obj
  });
  return cabinet;
}
export async function createDrawer(obj) {
  const drawer = await prisma.drawer.create({
    data: obj
  });
  return drawer;
}
export async function createBox(obj) {
  const box = await prisma.box.create({
    data: obj
  });
  return box;
}
export async function createItem(obj) {
  const item = await prisma.item.create({
    data: obj
  });
  return item;
}
export async function getAllRooms(obj) {
  const rooms = await prisma.room.findMany({
    where: obj
  }
  );
  return rooms;
}
export async function getAllCabinets(obj) {
  const cabinets = await prisma.cabinet.findMany({ where: obj });
  return cabinets;
}
export async function getAllDrawers(obj) {
  const drawers = await prisma.drawer.findMany({ where: obj });
  return drawers;
}
export async function getAllBoxes(obj) {
  const boxs = await prisma.box.findMany({ where: obj });
  return boxs;
}
export async function getAllItems(obj) {
  const items = await prisma.item.findMany({ where: obj });
  return items;
}
