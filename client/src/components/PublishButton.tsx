import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Loader2, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

export default function PublishButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [repoName, setRepoName] = useState('birigashi-tracker');
  const [description, setDescription] = useState('BiriGashi Investment Tracker - Property investment dashboard');
  const [isPrivate, setIsPrivate] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const { toast } = useToast();

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const response = await fetch('/api/publish-to-github', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoName, description, isPrivate }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to publish');
      }

      setPublishedUrl(data.repoUrl);
      toast({
        title: data.updated ? 'Updated successfully!' : 'Published successfully!',
        description: data.updated 
          ? `Repository updated at ${data.repoName}`
          : `Repository created at ${data.repoName}`,
      });
    } catch (error: any) {
      toast({
        title: 'Publishing failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="default" 
          size="sm" 
          className="gap-2"
          data-testid="button-publish-github"
        >
          <Github className="w-4 h-4" />
          Publish to GitHub
        </Button>
      </DialogTrigger>
      <DialogContent data-testid="dialog-publish">
        {publishedUrl ? (
          <div className="text-center py-6">
            <Check className="w-12 h-12 text-payment-paid mx-auto mb-4" />
            <DialogTitle className="text-xl mb-2">Published Successfully!</DialogTitle>
            <DialogDescription className="mb-4">
              Your investment tracker is now available on GitHub
            </DialogDescription>
            <a 
              href={publishedUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
              data-testid="link-repo"
            >
              View Repository →
            </a>
            <DialogFooter className="mt-6">
              <Button onClick={() => {
                setIsOpen(false);
                setPublishedUrl('');
              }} data-testid="button-close">
                Close
              </Button>
            </DialogFooter>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Publish to GitHub</DialogTitle>
              <DialogDescription>
                Create a new repository and push your investment tracker code
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="repo-name">Repository Name</Label>
                <Input
                  id="repo-name"
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value)}
                  placeholder="birigashi-tracker"
                  data-testid="input-repo-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Investment tracking dashboard"
                  data-testid="input-description"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="private-repo">Private Repository</Label>
                <Switch
                  id="private-repo"
                  checked={isPrivate}
                  onCheckedChange={setIsPrivate}
                  data-testid="switch-private"
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setIsOpen(false)}
                disabled={isPublishing}
                data-testid="button-cancel"
              >
                Cancel
              </Button>
              <Button 
                onClick={handlePublish} 
                disabled={isPublishing || !repoName}
                data-testid="button-publish"
              >
                {isPublishing && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {isPublishing ? 'Publishing...' : 'Publish'}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
