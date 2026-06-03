type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  state?: string;
  loanGoal?: string;
  loanAmount?: string;
};

const requiredFields: Array<keyof LeadPayload> = [
  "name",
  "phone",
  "email",
  "state",
  "loanGoal",
  "loanAmount",
];

function isPresent(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;
    const missing = requiredFields.filter((field) => !isPresent(body[field]));

    if (missing.length > 0) {
      return Response.json(
        {
          ok: false,
          error: `Missing required fields: ${missing.join(", ")}`,
        },
        { status: 400 }
      );
    }

    console.log("New mortgage lead", {
      name: body.name,
      phone: body.phone,
      email: body.email,
      state: body.state,
      loanGoal: body.loanGoal,
      loanAmount: body.loanAmount,
      receivedAt: new Date().toISOString(),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      {
        ok: false,
        error: "Invalid request",
      },
      { status: 400 }
    );
  }
}
