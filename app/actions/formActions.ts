"use server"
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createRoom, createCabinet, createDrawer, createBox, createItem } from './spaceActions.ts';

function getFormData(arg1: unknown, arg2?: unknown): FormData {
  if (typeof FormData !== 'undefined' && arg1 instanceof FormData) return arg1
  if (typeof FormData !== 'undefined' && arg2 instanceof FormData) return arg2
  throw new Error('FormData is required')
}

export async function createRoomAction(arg1: unknown, arg2?: unknown) {
  const formData = getFormData(arg1, arg2)
  const name = String(formData.get('name') ?? '').trim();
  if (name === '') {
    return { success: false, message: 'Name is required' };
  }
  try {
    const res = await createRoom({ name })
    revalidatePath('/add')
    return { success: true, message: 'Room created successfully', room: res };
  } catch (error) {
    return { success: false, message: 'Error creating room' };
  }
}
export async function createCabinetAction(arg1: unknown, arg2?: unknown) {
  const formData = getFormData(arg1, arg2)
  const name = String(formData.get('name') ?? '').trim();
  const roomId = String(formData.get('room') ?? '').trim();
  if (name === '') {
    return { success: false, message: 'Name is required' };
  }
  try {
    const res = await createCabinet({ name, roomId })
    revalidatePath('/add')
    return { success: true, message: 'cabinet created successfully' };
  } catch (error) {
    return { success: false, message: 'Error creating cabninet' };
  }
}
export async function createDrawerAction(arg1: unknown, arg2?: unknown) {
  const formData = getFormData(arg1, arg2)
  const name = String(formData.get('name') ?? '').trim();
  const roomId = String(formData.get('room') ?? '').trim();
  const cabinetId = String(formData.get('cabinet') ?? '').trim();
  if (name === '') {
    return { success: false, message: 'Name is required' };
  }
  try {
    const res = await createDrawer({ name, roomId, cabinetId })
    revalidatePath('/add')
    return { success: true, message: 'drawer created successfully' };
  } catch (error) {
    return { success: false, message: 'Error creating drawer' };
  }
}
export async function createBoxAction(arg1: unknown, arg2?: unknown) {
  const formData = getFormData(arg1, arg2)
  const name = String(formData.get('name') ?? '').trim();
  const roomId = String(formData.get('room') ?? '').trim();
  const cabinetId = String(formData.get('cabinet') ?? '').trim();
  const drawerId = String(formData.get('drawer') ?? '').trim();
  if (name === '') {
    return { success: false, message: 'Name is required' };
  }
  try {
    const res = await createBox({ name, roomId, cabinetId, drawerId })
    revalidatePath('/add')
    return { success: true, message: 'box created successfully' };
  } catch (error) {
    return { success: false, message: 'Error creating box' };
  }
}
export async function createItemAction(arg1: unknown, arg2?: unknown) {
  const formData = getFormData(arg1, arg2)
  const name = String(formData.get('name') ?? '').trim();
  const numberOfItems = parseInt(String(formData.get('number') ?? '0').trim())
  const description = String(formData.get('description') ?? '').trim();
  const roomId = String(formData.get('room') ?? '').trim();
  const cabinetId = String(formData.get('cabinet') ?? '').trim();
  const drawerId = String(formData.get('drawer') ?? '').trim();
  const boxId = String(formData.get('box') ?? '').trim();
  if (name === '') {
    return { success: false, message: 'Name is required' };
  }
  try {
    const res = await createItem({ name, numberOfItems, description, roomId, cabinetId, drawerId, boxId })
    revalidatePath('/add')
    return { success: true, message: 'box created successfully' };
  } catch (error) {
    return { success: false, message: 'Error creating box' };
  }
}
