import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export function LeadMagnetCTA(props: {
  title: string;
  description: string;
  href: string;
  badge?: string;
  ctaText?: string;
}) {
  const { title, description, href, badge = 'Free tool', ctaText = 'Get it free' } = props;

  return (
    <Card className="border-slate-200 bg-gradient-to-br from-white to-slate-50">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge className="bg-blue-100 text-blue-700 mb-3">
              <Sparkles className="w-4 h-4 mr-1" />
              {badge}
            </Badge>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 max-w-2xl">{description}</p>
          </div>
          <div className="shrink-0">
            <Link href={href}>
              <Button className="bg-slate-900 hover:bg-slate-800">
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

