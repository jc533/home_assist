"use server"
import { revalidatePath } from 'next/cache';
import { createRoom, createCabinet, createDrawer, createBox, createItem } from './spaceActions.ts'; export async function createRoomAction(formData) {
  const name = formData.get('name').trim();
  if (name.trim() === '') {
    return { success: false, message: 'Name is required' };
  }
  try {
    const res = await createRoom({ name })
    revalidatePath('/add')
    return { sauccess: true, message: 'Room created successfully' };
  } catch (error) {
    return { success: false, message: 'Error creating room' };
  }
}
export async function createCabinetAction(formData) {
  const name = formData.get('name').trim();
  const roomId = formData.get('room').trim();
  if (name.trim() === '') {
    return { success: false, message: 'Name is required' };
  }
  try {
    const res = await createCabinet({ name, roomId })
    revalidatePath('/add')
    return { sauccess: true, message: 'cabinet created successfully' };
  } catch (error) {
    return { success: false, message: 'Error creating cabinet' };
  }
}
export async function createDrawerAction(formData) {
  const name = formData.get('name').trim();
  const roomId = formData.get('room').trim();
  const cabinetId = formData.get('cabinet').trim();
  if (name.trim() === '') {
    return { success: false, message: 'Name is required' };
  }
  try {
    const res = await createDrawer({ name, roomId, cabinetId })
    return { sauccess: true, message: 'drawer created successfully' };
  } catch (error) {
    return { success: false, message: 'Error creating drawer' };
  }
}
export async function createBoxAction(formData) {
  const name = formData.get('name').trim();
  const roomId = formData.get('room').trim();
  const cabinetId = formData.get('cabinet').trim();
  const drawerId = formData.get('drawer').trim();
  if (name.trim() === '') {
    return { success: false, message: 'Name is required' };
  }
  try {
    const res = await createBox({ name, roomId, cabinetId, drawerId })
    return { sauccess: true, message: 'box created successfully' };
  } catch (error) {
    return { success: false, message: 'Error creating box' };
  }
}
export async function createItemAction(formData) {
  const name = formData.get('name').trim();
  const numberOfItems = parseInt(formData.get('number').trim())
  const description = formData.get('description').trim();
  const roomId = formData.get('room').trim();
  const cabinetId = formData.get('cabinet').trim();
  const drawerId = formData.get('drawer').trim();
  const boxId = formData.get('box').trim();
  if (name.trim() === '') {
    return { success: false, message: 'Name is required' };
  }
  try {
    const res = await createItem({ name, numberOfItems, description, roomId, cabinetId, drawerId, boxId })
    return { sauccess: true, message: 'box created successfully' };
  } catch (error) {
    return { success: false, message: 'Error creating box' };
  }
}
