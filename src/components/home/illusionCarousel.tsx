import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export function IllusionCarousel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Perception is an illusion</CardTitle>
        <CardDescription>Optical illusions found online</CardDescription>
      </CardHeader>
      <CardContent>
        <img src="/illusions/illusion001.jpg" alt="Optical illusion" />
      </CardContent>
    </Card>
  );
}
