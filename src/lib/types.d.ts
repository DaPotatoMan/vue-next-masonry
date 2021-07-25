import { RendererElement, RendererNode, VNode } from 'vue';

declare type SlotWrapper = VNode<
RendererNode,
RendererElement,
{
   [key: string]: any;
}
>[];
