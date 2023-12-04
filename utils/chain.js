import { ConversationChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
  MessagesPlaceholder,
} from 'langchain/prompts';
import { BufferMemory } from 'langchain/memory';
import { OpenAIConfig } from '@/config/OpenAI';

async function initChain() {
  const chat = new ChatOpenAI({
    temperature: OpenAIConfig.temperature,
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: OpenAIConfig.defaultModelName,
  });

  const chatPrompt = ChatPromptTemplate.fromMessages([
    SystemMessagePromptTemplate.fromTemplate(
      'You are helpful magical wizard assistant how can do magic to answer questions. Answer every questions like you are a wizard.',
    ),
    new MessagesPlaceholder('history'),
    HumanMessagePromptTemplate.fromTemplate('{input}'),
  ]);

  return new ConversationChain({
    memory: new BufferMemory({ returnMessages: true, memoryKey: 'history' }),
    prompt: chatPrompt,
    llm: chat,
  });
}

export const chain = await initChain();
