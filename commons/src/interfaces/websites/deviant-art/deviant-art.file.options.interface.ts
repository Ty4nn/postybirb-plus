import { DefaultFileOptions } from '../../submission/default-options.interface';

export interface DeviantArtFileOptions extends DefaultFileOptions {
  disableComments: boolean;
  AddWatermark: boolean;
  freeDownload: boolean;
  folders: string[];
  isMature: boolean;
  displayResolution: string;
  scraps: boolean;
  noAI: boolean;
  isAIGenerated: boolean;
  isExclusive: boolean;
  isPremiumDownload: boolean;
  isSubscribers: boolean;
  isPremiumGallery: boolean;
  isCreativeCommons: boolean;
  isCommercialUse: boolean;
  allowModifications: string;
}
