"use client";

import * as z from "zod";
import { LeafyGreen, LeafIcon, MessageSquare, ArrowRight, Text, Image } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";
import { Card } from "@/components/ui/card";
import { text } from "stream/consumers";

const PhotoPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });


  return ( 
    <div>
      <Heading
        title="Image Insights"
        description="Validate Image content using Clarifai."
        icon={Image}
        iconColor="text-red-500"
        bgColor="bg-red-500/10"
      />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1200px' }}>
          {/* Iframe Option */}
          <iframe
            src="https://ombhojane-true1streamlit.hf.space"
            frameBorder="0"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        </div>
      </div>

    </div>
  );
}

export default PhotoPage;
