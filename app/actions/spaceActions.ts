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
export async function getAllRooms() {
  const rooms = await prisma.room.findMany();
  return rooms;
}
export async function getAllCabinets() {
  const cabinets = await prisma.cabinet.findMany();
  return cabinets;
}
export async function getAllDrawers() {
  const drawers = await prisma.drawer.findMany();
  return drawers;
}
export async function getAllBoxes() {
  const boxs = await prisma.box.findMany();
  return boxs;
}
export async function getAllItems(obj) {
  const items = await prisma.item.findMany();
  return items;
}
