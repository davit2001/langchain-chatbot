import { roleTypes } from '@/constants/message';
import { NextResponse } from 'next/server';
import { chain } from '../../utils/chain';

export async function POST(request) {
  const { question } = await request.json();
  const result = await chain.call({
    input: question,
    // history: history.map(h => h.content).join('\n'),
  });

  return NextResponse.json({
    role: roleTypes.ASSISTANT,
    content: result.response,
  });
}
