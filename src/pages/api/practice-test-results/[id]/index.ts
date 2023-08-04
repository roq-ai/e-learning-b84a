import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { practiceTestResultValidationSchema } from 'validationSchema/practice-test-results';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.practice_test_result
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getPracticeTestResultById();
    case 'PUT':
      return updatePracticeTestResultById();
    case 'DELETE':
      return deletePracticeTestResultById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPracticeTestResultById() {
    const data = await prisma.practice_test_result.findFirst(
      convertQueryToPrismaUtil(req.query, 'practice_test_result'),
    );
    return res.status(200).json(data);
  }

  async function updatePracticeTestResultById() {
    await practiceTestResultValidationSchema.validate(req.body);
    const data = await prisma.practice_test_result.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deletePracticeTestResultById() {
    const data = await prisma.practice_test_result.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
