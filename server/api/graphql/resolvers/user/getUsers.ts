import type { FieldResolver } from 'nexus'

export const getUsers: FieldResolver<'Query', 'getUsers'> = async (
  _,
  args,
  { prisma },
) => {
  const { id, username, email } = args.userArgs || {}
  const { skip = 0, take = 10 } = args.pageArgs || {}

  const where = {
    ...(id && { id }),
    ...(username && { username: { contains: username } }),
    ...(email && { email: { contains: email } }),
  }

  const users = await prisma.user.findMany({
    where,
    skip,
    take,
    select: {
      id: true,
      username: true,
      email: true,
    },
  })

  return {
    nodes: users.map(
      (user: {
        id: number
        username: string
        email: string
        // created_at: Date
      }) => ({
        id: user.id,
        username: user.username,
        email: user.email,
        // createdAt: user.created_at,
      }),
    ),
  }
}
