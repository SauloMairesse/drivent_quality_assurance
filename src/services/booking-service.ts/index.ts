import { notFoundError } from "@/errors";
import eventRepository from "@/repositories/event-repository";
import { exclude } from "@/utils/prisma-utils";
import { Event } from "@prisma/client";
import dayjs from "dayjs";

async function getBookingService() {
  return;
}

async function postBookingService() {
  return;
}

async function putBookingService() {
  return;
}

const bookingService = {
  getBookingService,
  postBookingService,
  putBookingService
};

export default bookingService;
