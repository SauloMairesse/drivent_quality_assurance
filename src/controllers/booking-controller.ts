import { AuthenticatedRequest } from "@/middlewares";
import bookingService from "@/services/booking-service.ts";
import { Response } from "express";
import httpStatus from "http-status";

export async function getBookingController(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const variable = await bookingService.getBookingService();

    return res.status(httpStatus.OK).send(variable);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function postBookingController(req: AuthenticatedRequest, res: Response) {
  try {
    await bookingService.postBookingService();

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function putBookingController(req: AuthenticatedRequest, res: Response) {
  const { cep } = req.query as Record<string, string>;

  try {
    const variable = await bookingService.putBookingService();

    return res.status(httpStatus.OK).send(variable);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}
