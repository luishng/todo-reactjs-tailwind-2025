import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import Input from "../components/input";
import InputCheckbox from "../components/input-checkbox";
import Skeleton from "../components/skeleton";
import Text from "../components/text";

import TrashIcon from '../assets/icons/trash.svg?react'
import PencilIcon from '../assets/icons/pencil.svg?react'
import CheckIcon from '../assets/icons/check.svg?react'
import PlusIcon from '../assets/icons/plus.svg?react'
import SpinnerIcon from '../assets/icons/spinner.svg?react'
import XIcon from '../assets/icons/x.svg?react'

export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-1">
          <Text variant={"body-sm-bold"} className="text-pink-base">
            Levar o dog para passear
          </Text>
          <Text className="text-green-base">
            Levar o dog para passear
          </Text>
          <Text variant={"body-md-bold"}>
            Levar o dog para passear
          </Text>
          <Text variant={"body-md"}>
            Levar o dog para passear
          </Text>
        </div>

        <div className="flex gap-4">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={XIcon} />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={PlusIcon} />
        </div>

        <div className='flex gap-1'>
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
          <Button icon={PlusIcon} handling>Criando ...</Button>
        </div>

        <div className="flex gap-4">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} handling />
        </div>

        <div>
          <Input />
        </div>

        <div>
          <InputCheckbox />

          <InputCheckbox loading />
        </div>

        <div>
          <Card>Cardzim</Card>
          <Card size="md">Cardzão</Card>
        </div>

        <div className='space-y-2'>
          <Skeleton className='h-6' />
          <Skeleton className='h-6' />
          <Skeleton className="h-6 w-96" />
        </div>
      </div>
    </Container>
  )
}