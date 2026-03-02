import { site } from '@/lib/site';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function NowSection() {
  if (!site.now || site.now.length === 0) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-normal tracking-tight">Now</CardTitle>
        <CardDescription>What I'm focused on right now</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          {site.now.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
